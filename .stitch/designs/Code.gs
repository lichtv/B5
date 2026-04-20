// Cấu hình đã xóa sạch emoji để tránh lỗi ????
const SHEET_NAME = 'Leads_CamNang';
const SENDER_NAME = 'BTC READ2US 2026';
const EMAIL_SUBJECT = 'Chuc mung! Cam nang "Hanh dong 2026" cua ban da san sang';
const BOOK_LINK = 'https://ready2us.com/portal/space/kho-tai-nguyen/post/sach-huong-dan-tiep-can-thi'; 

function doPost(e) {
  const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" };
  try {
    let data = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : null;
    if (!data) return responseJSON({status: 'error', message: 'No data'}, headers);
    
    const sheet = initSheet();
    const leadId = Utilities.getUuid();
    sheet.appendRow([leadId, new Date(), data.fullName || '', data.email || '', data.phone || '', data.company || '', data.source || '', 'Da gui Email', '', '']);
    sendEmail(data.email, data.fullName, leadId);
    return responseJSON({status: 'success'}, headers);
  } catch (error) { return responseJSON({status: 'error', error: error.toString()}, headers); }
}

function doGet(e) {
  const action = e.parameter.action;
  const leadId = e.parameter.id;
  if (!action || !leadId) return ContentService.createTextOutput("Yeu cau khong hop le");
  const sheet = initSheet();
  const values = sheet.getDataRange().getValues();
  let rowIndex = -1;
  for(let i=1; i<values.length; i++) { if(values[i][0] === leadId) { rowIndex = i + 1; break; } }
  if (rowIndex === -1) return ContentService.createTextOutput("Khong tim thay");
  
  if (action === 'open') {
    if (sheet.getRange(rowIndex, 9).getValue() === '') {
      sheet.getRange(rowIndex, 9).setValue(new Date());
      sheet.getRange(rowIndex, 8).setValue('Da mo Email');
    }
    return ContentService.createTextOutput(Utilities.base64Decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=")).setMimeType(ContentService.MimeType.PNG);
  } else if (action === 'click') {
    sheet.getRange(rowIndex, 10).setValue(new Date());
    sheet.getRange(rowIndex, 8).setValue('Da Download Sach');
    return HtmlService.createHtmlOutput('<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:50px;"><h2>Dang tai tai lieu...</h2><script>setTimeout(function(){window.top.location.href="' + BOOK_LINK + '";},1000);</script></body></html>');
  }
}

function sendEmail(emailAddress, name, leadId) {
  const webAppUrl = ScriptApp.getService().getUrl(); 
  const trackOpenUrl = webAppUrl + '?action=open&id=' + leadId;
  const trackClickUrl = webAppUrl + '?action=click&id=' + leadId;
  const htmlBody = '<div style="font-family:sans-serif;max-width:600px;margin:auto;border-top:5px solid #a80700;padding:20px;">' +
    '<h2>Xin chao ' + name + ',</h2>' +
    '<p>Chung toi gui tang ban tai lieu <b>Hanh dong 2026: Dua san pham Viet vao My</b>.</p>' +
    '<div style="text-align:center;margin:30px;"><a href="' + trackClickUrl + '" style="background:#a80700;color:white;padding:15px 30px;text-decoration:none;border-radius:5px;font-weight:bold;">TAI XUONG TAI LIEU NGAY</a></div>' +
    '<p>Neu can ho tro vui long reply email nay.</p><p>Tran trong,<br>BTC READ2US</p>' +
    '<img src="' + trackOpenUrl + '" width="1" height="1" style="display:none;"/></div>';
  GmailApp.sendEmail(emailAddress, EMAIL_SUBJECT, "Email ho tro HTML.", { htmlBody: htmlBody, name: SENDER_NAME });
}

function initSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['ID', 'Time', 'Name', 'Email', 'Phone', 'Company', 'Source', 'Status', 'Open', 'Click']);
    sheet.getRange("A1:J1").setBackground('#0a192f').setFontColor('#ffffff').setFrozenRows(1);
  }
  return sheet;
}

function responseJSON(data, headers) { return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON); }
function doOptions(e) { return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON); }

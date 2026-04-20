// ==========================================
// GOOGLE APPS SCRIPT CHO READ2US 2026 LANDING PAGE
// Chức năng: Lưu Lead Cẩm nang + Gửi Email tự động + Track Email/Link
// ==========================================

// --- CÀI ĐẶT ---
const SHEET_NAME = 'Leads_CamNang';
const SENDER_NAME = 'BTC READ2US 2026';
const EMAIL_SUBJECT = '🎁 Chúc mừng! Cẩm nang "Hành động 2026" của bạn đã sẵn sàng';
// 👉 THAY BẰNG LINK GOOGLE DRIVE HOẶC LINK FILE PDF CỦA BẠN:
const BOOK_LINK = 'https://ready2us.com/portal/space/kho-tai-nguyen/post/sach-huong-dan-tiep-can-thi';

// 1. Nhận Data từ Landing Page
function doPost(e) {
    // CORS Headers để website có quyền gửi data
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    try {
        let data;
        if (e.postData && e.postData.contents) {
            data = JSON.parse(e.postData.contents);
        } else {
            return responseJSON({ status: 'error', message: 'No data' }, headers);
        }

        const sheet = initSheet();
        const leadId = Utilities.getUuid(); // Tạo ID theo dõi duy nhất
        const timestamp = new Date();

        // Ghi vào Google Sheet
        sheet.appendRow([
            leadId,
            timestamp, // Thời gian đăng ký
            data.fullName || '',
            data.email || '',
            data.phone || '',
            data.company || '',
            data.source || '',
            'Đã gửi Email', // Trạng thái
            '', // Chờ Open Mail
            '', // Chờ Click Link
        ]);

        // Gửi Email
        sendEmail(data.email, data.fullName, leadId);

        return responseJSON({ status: 'success' }, headers);

    } catch (error) {
        return responseJSON({ status: 'error', error: error.toString() }, headers);
    }
}

// 2. HTTP GET để Tracking Email Open và Click Link
function doGet(e) {
    const action = e.parameter.action;
    const leadId = e.parameter.id;

    if (!action || !leadId) return ContentService.createTextOutput("Yêu cầu không hợp lệ.");

    const sheet = initSheet();
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();

    let rowIndex = -1;
    // Tìm đúng hàng của khách hàng này
    for (let i = 1; i < values.length; i++) {
        if (values[i][0] === leadId) {
            rowIndex = i + 1; // +1 vì mảng JS từ 0, dòng Sheet từ 1
            break;
        }
    }

    if (rowIndex === -1) return ContentService.createTextOutput("Không tìm thấy dữ liệu.");

    const now = new Date();

    if (action === 'open') {
        // Chỉ cập nhật nếu chưa từng open (cột thứ 9)
        if (sheet.getRange(rowIndex, 9).getValue() === '') {
            sheet.getRange(rowIndex, 9).setValue(now);
            sheet.getRange(rowIndex, 8).setValue('Đã mở Email');
        }
        // Trả về ảnh pixel 1x1 trong suốt
        const base64Pixel = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        return ContentService.createTextOutput(Utilities.base64Decode(base64Pixel)).setMimeType(ContentService.MimeType.PNG);

    } else if (action === 'click') {
        // Cập nhật thời gian click lần cuối (cột thứ 10)
        sheet.getRange(rowIndex, 10).setValue(now);
        sheet.getRange(rowIndex, 8).setValue('Đã Download Sách');

        // Tạo 1 trang trung gian UI chuyên nghiệp (tránh việc khách thấy trang trắng và link script)
        const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tải xuống Cẩm nang - READ2US</title>
        <style>
          body { font-family: 'Inter', sans-serif; background-color: #f7fafd; color: #181c1e; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .container { text-align: center; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); max-width: 500px; }
          .spinner { border: 4px solid #f1f4f7; border-top: 4px solid #004db0; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="spinner"></div>
          <h2 style="color: #004db0; margin-bottom: 10px;">Đang chuẩn bị tài liệu...</h2>
          <p style="color: #55656e;">Hệ thống đang chuyển hướng bạn đến cẩm nang. Vui lòng đợi trong giây lát.</p>
        </div>
        <script>
          setTimeout(function() {
            window.top.location.href = '${BOOK_LINK}';
          }, 1500); 
        </script>
      </body>
      </html>
    `;

        return HtmlService.createHtmlOutput(htmlTemplate);
    }
}

// 3. Hàm tạo và gửi Email
function sendEmail(emailAddress, name, leadId) {
    // Lấy URL của tool này (tạo link tracking động)
    const webAppUrl = ScriptApp.getService().getUrl();

    const trackOpenUrl = webAppUrl + '?action=open&id=' + leadId;
    const trackClickUrl = webAppUrl + '?action=click&id=' + leadId;

    const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
      <div style="background: white; padding: 30px; border-radius: 8px; border-top: 4px solid #a80700;">
        <h2 style="color: #004db0; margin-top: 0;">Xin chào ${name},</h2>
        <p style="font-size: 16px; color: #333; line-height: 1.5;">Cảm ơn bạn đã quan tâm đến chương trình <strong>READ2US 2026</strong>. Chúng tôi rất vui mừng được gửi tặng bạn tài liệu độc quyền này.</p>
        <p style="font-size: 16px; color: #333; line-height: 1.5;">Cuốn cẩm nang <em>"Hành động 2026: Đưa Sản Phẩm Việt Vào Mỹ"</em> chứa đựng những đúc kết thực chiến nhất để giúp doanh nghiệp của bạn tự tin trên hành trình tiến ra biển lớn.</p>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="${trackClickUrl}" style="background-color: #a80700; color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block;">👉 TẢI XUỐNG CẨM NANG NGAY</a>
        </div>
        
        <p style="font-size: 16px; color: #333; line-height: 1.5;">Nếu bạn cần đặt lịch tư vấn 1:1, đừng ngần ngại reply lại email này.</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
        <p style="font-size: 14px; color: #666; margin-bottom: 0;">Trân trọng,<br><strong>Ban tổ chức READ2US</strong></p>
        
        <!-- Tracking Pixel (Vô hình) -->
        <img src="${trackOpenUrl}" width="1" height="1" style="display:none;" alt=""/>
      </div>
    </div>
  `;

    GmailApp.sendEmail(emailAddress, EMAIL_SUBJECT, "Vui lòng xem bằng Email hỗ trợ HTML.", {
        htmlBody: htmlBody,
        name: SENDER_NAME
    });
}

// 4. Hàm khởi tạo Bảng tính
function initSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
        const headers = [
            'Lead ID (Ẩn)', 'Thời gian Đăng ký', 'Họ & Tên', 'Email', 'SĐT', 'Doanh nghiệp', 'Link Nguồn', 'Trạng thái Tương tác', 'Lần đầu mở Email', 'Lần đầu tải Sách'
        ];
        sheet.appendRow(headers);
        sheet.getRange("A1:J1").setBackground('#0a192f').setFontColor('#ffffff').setFontWeight('bold');
        sheet.setFrozenRows(1);
        sheet.setColumnWidth(1, 10); // Ẩn cột ID
        sheet.setColumnWidth(2, 160);
        sheet.setColumnWidth(3, 160);
        sheet.setColumnWidth(4, 200);
    }
    return sheet;
}

function responseJSON(data, headers) {
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// CORS Preflight
function doOptions(e) {
    return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON);
}

/**
 * Google Apps Script API cho Module P&L Antigravity (v2)
 * Đã tối ưu cho cấu trúc bảng Plan ngang (tháng là cột).
 * Cột A = STT, Cột B = Khoản mục, Cột C = Giả định, Cột D trở đi = Tháng 0..12, cột cuối = Tổng
 * ID nằm ở cột A (STT), hàng dữ liệu bắt đầu từ hàng chứa ID.
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetPlan = ss.getSheetByName("Plan");
  var sheetActual = ss.getSheetByName("P&L");

  if (!sheetPlan) {
    return _json({ error: "Khong tim thay tab Plan" });
  }

  var planItems = parsePlanSheet(sheetPlan);
  var actualItems = sheetActual ? parsePlanSheet(sheetActual) : [];
  var merged = mergeByID(planItems, actualItems);

  return _json({
    timestamp: new Date().toISOString(),
    source: ss.getName(),
    items: merged
  });
}

/**
 * Đọc sheet có cấu trúc ngang:
 * Hàng header chứa "STT" ở cột A -> xác định hàng header
 * Sau đó đọc các hàng tiếp theo, bỏ qua hàng trống hoặc hàng tổng hợp không có ID
 */
function parsePlanSheet(sheet) {
  var allData = sheet.getDataRange().getValues();
  var headerRowIndex = -1;
  var headers = [];

  // Tìm hàng header (hàng chứa "STT" hoặc "ID" ở cột đầu)
  for (var r = 0; r < allData.length; r++) {
    var cellA = String(allData[r][0]).trim().toUpperCase();
    if (cellA === "STT" || cellA === "ID") {
      headerRowIndex = r;
      headers = allData[r];
      break;
    }
  }

  // Nếu không tìm thấy header chuẩn, thử đọc theo cấu trúc flat
  if (headerRowIndex === -1) {
    return parseFlatSheet(sheet, allData);
  }

  var items = [];
  for (var i = headerRowIndex + 1; i < allData.length; i++) {
    var row = allData[i];
    var id = String(row[0]).trim();

    // Bỏ qua hàng trống hoặc hàng không có ID bắt đầu bằng REV_, COST_, DRV_
    if (!id || (!id.match(/^(REV_|COST_|DRV_|EXP_)/i) && !id.match(/^\d+$/))) {
      // Kiểm tra xem có phải hàng tổng hợp (DOANH THU, CHI PHÍ...) không
      var colB = String(row[1]).trim().toUpperCase();
      if (colB === "DOANH THU" || colB === "CHI PHÍ TRỰC TIẾP" || colB === "CHI PHÍ GIÁN TIẾP" || colB.indexOf("LÃI") >= 0) {
        id = "SUMMARY_" + colB.replace(/\s+/g, "_");
      } else {
        continue;
      }
    }

    var item = { id: id, name: String(row[1]).trim() };
    var months = {};

    // Cột 3 trở đi (index 3) là dữ liệu theo tháng
    // Header cột 3 = "Tháng 0", cột 4 = "Tháng 5", ...
    for (var c = 3; c < headers.length; c++) {
      var monthLabel = String(headers[c]).trim();
      if (monthLabel && monthLabel !== "") {
        months[monthLabel] = (typeof row[c] === "number") ? row[c] : parseFloat(row[c]) || 0;
      }
    }
    item.months = months;

    // Giả định ở cột C (index 2)
    item.assumption = String(row[2]).trim();

    items.push(item);
  }

  return items;
}

/**
 * Đọc sheet dạng flat (không có header STT)
 * Cấu trúc: Cột A = ID, Cột B = Khoản mục, Cột C = Loại, Cột D trở đi = Tháng
 */
function parseFlatSheet(sheet, allData) {
  var items = [];
  for (var i = 0; i < allData.length; i++) {
    var row = allData[i];
    var id = String(row[0]).trim();

    if (!id || !id.match(/^(REV_|COST_|DRV_|EXP_)/i)) {
      continue;
    }

    var item = { id: id, name: String(row[1]).trim() };
    var months = {};

    // Giả sử từ cột C trở đi là dữ liệu tháng
    for (var c = 2; c < row.length; c++) {
      months["Col_" + c] = (typeof row[c] === "number") ? row[c] : parseFloat(row[c]) || 0;
    }
    item.months = months;
    items.push(item);
  }
  return items;
}

/**
 * Gộp Plan và Actual dựa trên ID
 */
function mergeByID(planItems, actualItems) {
  var actualMap = {};
  for (var i = 0; i < actualItems.length; i++) {
    actualMap[actualItems[i].id] = actualItems[i];
  }

  var result = [];
  for (var j = 0; j < planItems.length; j++) {
    var plan = planItems[j];
    var actual = actualMap[plan.id] || null;

    result.push({
      id: plan.id,
      name: plan.name,
      assumption: plan.assumption || "",
      plan_months: plan.months,
      actual_months: actual ? actual.months : null
    });
  }

  return result;
}

/**
 * CHỨC NĂNG ĐỒNG BỘ: Leads_VietnamMade -> Finance (P&L)
 * Đồng bộ số lượng Lead và Deal (Đã thanh toán) vào các mã DRV tương ứng.
 */
function syncFunnelData() {
  const ssFinance = SpreadsheetApp.getActiveSpreadsheet();
  const sheetPL = ssFinance.getSheetByName("P&L");
  
  // 1. Tìm file Leads (Nằm cùng thư mục hoặc tìm theo tên)
  const files = DriveApp.getFilesByName("Leads_VietnamMade");
  if (!files.hasNext()) {
    Logger.log("Không tìm thấy file Leads_VietnamMade");
    return "Lỗi: Không tìm thấy file Leads";
  }
  
  const ssLeads = SpreadsheetApp.open(files.next());
  const sheetLeads = ssLeads.getSheetByName("Leads_VietnamMade");
  const dataLeads = sheetLeads.getDataRange().getValues();
  
  // 2. Phân tích dữ liệu Lead theo tháng
  // Cấu trúc: [Lead ID (0), Timestamp (1), ..., Status (15)]
  const leadCounts = {}; // { "Tháng 5": count, ... }
  const dealCounts = {}; // { "Tháng 5": count, ... }
  
  for (let i = 1; i < dataLeads.length; i++) {
    const row = dataLeads[i];
    const date = new Date(row[1]);
    if (isNaN(date.getTime())) continue;
    
    const monthKey = "Tháng " + (date.getMonth() + 1); // VD: "Tháng 5"
    const status = String(row[15] || "").trim();
    
    leadCounts[monthKey] = (leadCounts[monthKey] || 0) + 1;
    if (status === "Đã thanh toán") {
      dealCounts[monthKey] = (dealCounts[monthKey] || 0) + 1;
    }
  }
  
  // 3. Cập nhật vào bảng P&L của Finance
  const plData = sheetPL.getDataRange().getValues();
  const headers = plData.find(r => String(r[0]).trim().toUpperCase() === "STT" || String(r[0]).trim().toUpperCase() === "ID");
  if (!headers) return "Lỗi: Không tìm thấy hàng header trong P&L";
  
  const headerIdx = plData.indexOf(headers);
  const monthCols = {}; // { "Tháng 5": colIndex, ... }
  for (let c = 3; c < headers.length; c++) {
    monthCols[String(headers[c]).trim()] = c + 1;
  }
  
  // Quét bảng P&L để tìm dòng DRV_LEAD và DRV_DEAL
  for (let i = headerIdx + 1; i < plData.length; i++) {
    const id = String(plData[i][0]).trim();
    
    if (id.startsWith("DRV_LEAD")) {
      updateRowCounts(sheetPL, i + 1, monthCols, leadCounts);
    } else if (id.startsWith("DRV_DEAL")) {
      updateRowCounts(sheetPL, i + 1, monthCols, dealCounts);
    }
  }
  
  return "Đồng bộ thành công!";
}

function updateRowCounts(sheet, rowIdx, monthCols, counts) {
  for (const month in counts) {
    const col = monthCols[month];
    if (col) {
      sheet.getRange(rowIdx, col).setValue(counts[month]);
    }
  }
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

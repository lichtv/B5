/** 
 * AGOS MASTER BACKEND v3.0.0 HYBRID — Lean Revenue OS + Data Intelligence
 * ═══════════════════════════════════════════════════════════════════════
 * FROM v3.0.0: Audit Logging, Dynamic Scoring, Human-in-the-loop Drafts
 * FROM CODEX:  Email Tracking (Open/Click), Auto-Tagging, Campaign i18n
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Sheet Headers (16 columns):
 * A: Lead ID | B: Timestamp | C: Name | D: Email | E: Phone | F: Company
 * G: Campaign | H: Source | I: Score | J: Status | K: AI Draft
 * L: Last Action | M: Tags | N: Email Opens | O: Email Clicks | P: Last Tracked
 */

const SHEET_NAME = 'AGOS_VietnamMade';
const LOG_SHEET  = 'AGOS_Log';
const METRICS_SHEET = 'AGOS_Metrics';
const PROP  = PropertiesService.getScriptProperties();
const ADMIN = { 
  u: PROP.getProperty('ADMIN_USER') || 'admin', 
  p: PROP.getProperty('ADMIN_PASS') || 'agos2026', 
  salt: PROP.getProperty('SESSION_SALT') || 'agos_lean_v3' 
};

// ═══════════════════════════════════════════
// [FROM CODEX] Campaign Settings (multi-language)
// ═══════════════════════════════════════════
const SETTINGS = {
  'VietnamMade_VI':           { name: 'VietnamMade', sub: '🎁 Cẩm nang "Hành động 2026" của bạn đã sẵn sàng', link: 'https://ready2us.com/portal/space/kho-tai-nguyen/post/sach-huong-dan-tiep-can-thi', lang: 'vi' },
  'VietnamMade_Exit_VI':      { name: 'VietnamMade', sub: '🎁 Quà tặng bất ngờ: Cẩm nang Hành động 2026', link: 'https://ready2us.com/portal/space/kho-tai-nguyen/post/sach-huong-dan-tiep-can-thi', lang: 'vi' },
  'VietnamMade_EN_Brochure':  { name: 'VietnamMade', sub: '🎁 Your Vietnam Sourcing Guide 2026 is here!', link: 'https://ready2us.com/portal/space/kho-tai-nguyen/post/sach-huong-dan-tiep-can-thi', lang: 'en' },
  'VietCeramics_Luxury':      { name: 'Viet-Ceramics', sub: '✨ Discover the Artisan Soul: Your Luxury Ceramics Lookbook', link: 'https://ready2us.com/Viet-Ceramics/luxury-lookbook.pdf', lang: 'en' },
  'VietCeramics_Artisan':     { name: 'Viet-Ceramics', sub: '🎨 Handmade Heritage: The Artisan Collection 2026', link: 'https://ready2us.com/Viet-Ceramics/artisan-collection.pdf', lang: 'en' },
  'v3_default':               { name: 'VietnamMade', sub: '🎁 Your sourcing guide is ready', link: 'https://ready2us.com/portal/space/kho-tai-nguyen/post/sach-huong-dan-tiep-can-thi', lang: 'en' }
};

// ═══════════════════════════════════════════
// ENTRY POINTS
// ═══════════════════════════════════════════

function doGet(e) {
  const params = e.parameter;
  const { action, token, u, p, id, camp } = params;

  // --- AUTH ---
  if (action === 'login') {
    return (u === ADMIN.u && p === ADMIN.p) 
      ? resp({ status: 'ok', token: getToken(u) }) 
      : resp({ status: 'error', message: 'Invalid credentials' });
  }

  // --- [FROM CODEX] Email Tracking (no auth required) ---
  if (action === 'open' || action === 'click' || action === 'masterclass') {
    return handleEmailTracking(action, id, camp);
  }

  // --- AUTH GATE for Dashboard actions ---
  if (!token || token !== getToken(ADMIN.u)) {
    return ContentService.createTextOutput('Unauthorized').setMimeType(ContentService.MimeType.TEXT);
  }

  try {
    const sheet = initSheet();
    const allData = sheet.getDataRange().getValues();
    const headers = allData.shift();

    switch (action) {
      case 'getStats':        return resp(getDashboardStats(allData));
      case 'getLeads':        return resp(getLeads(allData, headers, params.filter || 'all'));
      case 'getDrafts':       return resp(getDrafts(allData, headers));
      case 'syncLookerMetrics': return resp(syncLookerMetrics());
      case 'approveDraft':    return resp(approveDraft(params.id, params.content));
      case 'updateStatus':    return resp(updateLeadStatus(params.id, params.status));
      case 'generateAIDraft': return resp(generateAIDraft(params.id));
      case 'getDailySummary': return resp(getDailySummary());
      default: return resp({ status: 'error', message: 'Unknown action' });
    }
  } catch (err) {
    logAction('SYSTEM_ERROR', 'Action: ' + action + ' | Error: ' + err.toString());
    return resp({ status: 'error', message: err.toString() });
  }
}

function doPost(e) {
  const headers = { 
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "POST", 
    "Access-Control-Allow-Headers": "Content-Type" 
  };

  try {
    const data = JSON.parse(e.postData.contents);
    const email = (data.email || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return resp({ status: 'error', message: 'Invalid email' }, headers);

    const sheet = initSheet();
    const leadId = data.lead_id || Utilities.getUuid();
    const camp = data.campaign || 'v3_default';
    const cfg = SETTINGS[camp] || SETTINGS['v3_default'];
    
    // [FROM v3.0.0] Dynamic Scoring
    const score = calculateScore(data);
    
    // [FROM CODEX] Auto-Tagging based on source
    let tags = data.tags || '';
    if (data.source) {
      const src = data.source.toLowerCase();
      if (src.includes('zalo') || src.includes('messenger') || src.includes('whatsapp')) tags += (tags?',':'') + 'Social_Contact';
      if (src.includes('email')) tags += (tags?',':'') + 'Email_Marketing';
      if (src.includes('assessment')) tags += (tags?',':'') + 'Assessment_Lead';
      if (src.includes('exit')) tags += (tags?',':'') + 'Exit_Intent';
    }
    
    // Hybrid 16-column row
    const row = [
      leadId,                           // A: Lead ID
      new Date(),                       // B: Timestamp
      data.fullName || 'Anonymous',     // C: Name
      email,                            // D: Email
      data.phone || '',                 // E: Phone
      data.company || '',               // F: Company
      camp,                             // G: Campaign
      data.source || 'web',             // H: Source
      score,                            // I: Score
      'New Lead',                       // J: Status
      '',                               // K: AI Draft
      'Lead Captured',                  // L: Last Action
      tags,                             // M: Tags
      0,                                // N: Email Opens
      0,                                // O: Email Clicks
      ''                                // P: Last Tracked
    ];
    
    sheet.appendRow(row);
    
    // [FROM v3.0.0] Audit Logging
    logAction('LEAD_CAPTURE', `New lead: ${email} | Score: ${score} | Tags: ${tags || 'none'}`);
    
    // [FROM CODEX] Auto-send welcome email with tracking
    sendTrackedMail(email, data.fullName, leadId, cfg);
    
    return resp({ status: 'success', id: leadId }, headers);
  } catch (err) { 
    logAction('POST_ERROR', err.toString());
    return resp({ status: 'error', error: err.toString() }, headers); 
  }
}

// ═══════════════════════════════════════════
// [FROM v3.0.0] CORE SCORING
// ═══════════════════════════════════════════

function calculateScore(data) {
  let score = parseInt(data.assessment_score || 0);
  const email = (data.email || '').toLowerCase();
  
  // B2B Bonus for business domains
  const genericDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com'];
  const domain = email.split('@')[1];
  if (domain && !genericDomains.includes(domain)) score += 15;
  
  // Bonus for detailed info
  if (data.company && data.company.length > 3) score += 5;
  if (data.phone && data.phone.length > 5) score += 5;
  if (data.fullName && data.fullName.trim().includes(' ')) score += 3; // Full name bonus
  
  return Math.min(100, Math.max(0, score));
}

// ═══════════════════════════════════════════
// [FROM CODEX] EMAIL TRACKING
// ═══════════════════════════════════════════

function handleEmailTracking(action, id, camp) {
  if (!id) return ContentService.createTextOutput("Missing ID");
  
  const sheet = initSheet();
  const data = sheet.getDataRange().getValues();
  const idx = data.findIndex(r => r[0] === id);
  if (idx === -1) return ContentService.createTextOutput("Not Found");
  
  const row = idx + 1;
  const cfg = SETTINGS[camp] || SETTINGS['v3_default'];
  const now = new Date();

  if (action === 'open') {
    const opens = parseInt(sheet.getRange(row, 14).getValue()) || 0;
    sheet.getRange(row, 14).setValue(opens + 1);
    sheet.getRange(row, 16).setValue(now);
    logAction('EMAIL_OPEN', `Lead ${id} opened email (total: ${opens + 1})`);
    // Return 1x1 transparent pixel
    return ContentService.createTextOutput(Utilities.base64Decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=")).setMimeType(ContentService.MimeType.PNG);
  }
  
  if (action === 'click') {
    const clicks = parseInt(sheet.getRange(row, 15).getValue()) || 0;
    sheet.getRange(row, 15).setValue(clicks + 1);
    sheet.getRange(row, 16).setValue(now);
    sheet.getRange(row, 10).setValue('Engaged'); // Auto-update status
    logAction('EMAIL_CLICK', `Lead ${id} clicked CTA (total: ${clicks + 1})`);
    return HtmlService.createHtmlOutput(`<html><body style="font-family:sans-serif;text-align:center;padding-top:20%"><h2 style="color:#c00">${cfg.lang==='vi'?'Đang chuẩn bị...':'Preparing...'}</h2><script>setTimeout(()=>location.href='${cfg.link}',1000)</script></body></html>`);
  }
  
  if (action === 'masterclass') {
    sheet.getRange(row, 12).setValue('Click Masterclass');
    logAction('MASTERCLASS_CLICK', `Lead ${id} interested in Masterclass`);
    return HtmlService.createHtmlOutput(`<script>location.href='https://ready2us.com/Global-Sale/masterclass.html?id=${id}';</script>`);
  }
}

function sendTrackedMail(to, name, id, cfg) {
  try {
    const url = ScriptApp.getService().getUrl();
    const track = (a) => `${url}?action=${a}&id=${id}&camp=${encodeURIComponent(cfg.lang)}`;
    
    const body = cfg.lang === 'vi' ? 
      `<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:20px;border-top:4px solid #c00">
        <h2>Xin chào ${name || 'anh/chị'},</h2>
        <p>Cẩm nang "Hành động 2026" của bạn đã sẵn sàng.</p>
        <div style="text-align:center;margin:30px">
          <a href="${track('click')}" style="background:#c00;color:#fff;padding:15px 30px;border-radius:8px;text-decoration:none;font-weight:bold">👉 TẢI XUỐNG NGAY</a>
        </div>
        <div style="background:#fff8f8;padding:15px;border-radius:10px;border-left:4px solid #c00">
          <h3 style="color:#c00;margin:0">🚀 Masterclass AGOS Challenge</h3>
          <p>Lộ trình thực chiến làm chủ thị trường Mỹ với chi phí tối ưu nhất.</p>
          <a href="${track('masterclass')}" style="color:#c00;font-weight:bold">Tìm hiểu ngay &rarr;</a>
        </div>
        <img src="${track('open')}" width="1" height="1"/>
      </div>` :
      `<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:20px;border-top:4px solid #c00">
        <h2>Hi ${name || 'there'},</h2>
        <p>Your "Vietnam Sourcing Guide 2026" is ready.</p>
        <div style="text-align:center;margin:30px">
          <a href="${track('click')}" style="background:#c00;color:#fff;padding:15px 30px;border-radius:8px;text-decoration:none;font-weight:bold">👉 DOWNLOAD NOW</a>
        </div>
        <img src="${track('open')}" width="1" height="1"/>
      </div>`;
    
    GmailApp.sendEmail(to, cfg.sub, '', { htmlBody: body, name: cfg.name });
    logAction('WELCOME_EMAIL', `Tracked welcome email sent to ${to}`);
  } catch (e) {
    logAction('EMAIL_ERROR', `Welcome email failed for ${to}: ${e.toString()}`);
  }
}

// ═══════════════════════════════════════════
// [FROM v3.0.0] DASHBOARD API
// ═══════════════════════════════════════════

function getDashboardStats(data) {
  const stats = {
    total: data.length,
    new: data.filter(r => r[9] === 'New Lead').length,
    drafted: data.filter(r => r[10] && r[10] !== '').length,
    replied: data.filter(r => r[9] === 'Replied').length,
    meeting: data.filter(r => r[9] === 'Meeting').length,
    engaged: data.filter(r => r[9] === 'Engaged').length,
    totalOpens: data.reduce((sum, r) => sum + (parseInt(r[13]) || 0), 0),
    totalClicks: data.reduce((sum, r) => sum + (parseInt(r[14]) || 0), 0),
    conversionRate: 0,
    openRate: 0
  };
  
  if (stats.total > 0) {
    stats.conversionRate = ((stats.replied / stats.total) * 100).toFixed(1);
    stats.openRate = (((stats.totalOpens > 0 ? data.filter(r => parseInt(r[13]) > 0).length : 0) / stats.total) * 100).toFixed(1);
  }
  
  return stats;
}

function getLeads(data, headers, filter) {
  let leads = data.map(r => {
    let obj = {};
    headers.forEach((h, i) => obj[h.toLowerCase().replace(/ /g, '_')] = r[i]);
    return obj;
  });
  
  if (filter === 'new') leads = leads.filter(l => l.status === 'New Lead');
  if (filter === 'active') leads = leads.filter(l => ['Opportunity', 'Replied', 'Engaged'].includes(l.status));
  if (filter === 'hot') leads = leads.filter(l => (parseInt(l.score) || 0) >= 70);
  
  return leads.reverse(); 
}

function getDrafts(data, headers) {
  return getLeads(data, headers, 'new');
}

// ═══════════════════════════════════════════
// LOOKER STUDIO REPORTING LAYER
// ═══════════════════════════════════════════

function syncLookerMetrics() {
  const leadSheet = initSheet();
  const metricsSheet = initMetricsSheet();
  const values = leadSheet.getDataRange().getValues();
  values.shift();

  const metrics = buildLookerMetrics(values);
  const headers = getMetricsHeaders();
  metricsSheet.clearContents();
  metricsSheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setBackground('#001F3F')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold');

  if (metrics.length) {
    metricsSheet.getRange(2, 1, metrics.length, headers.length).setValues(metrics);
  }

  metricsSheet.setFrozenRows(1);
  logAction('LOOKER_METRICS_SYNC', `Synced ${metrics.length} reporting rows to ${METRICS_SHEET}`);
  return { status: 'ok', sheet: METRICS_SHEET, rows: metrics.length };
}

function buildLookerMetrics(rows) {
  const grouped = {};
  const now = new Date();

  rows.forEach(row => {
    const timestamp = row[1] ? new Date(row[1]) : null;
    if (!timestamp || isNaN(timestamp.getTime())) return;

    const metricDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd');
    const campaign = row[6] || 'v3_default';
    const source = row[7] || 'web';
    const key = [metricDate, campaign, source].join('|');
    const status = row[9] || '';
    const tags = (row[12] || '').toString();
    const opens = parseInt(row[13], 10) || 0;
    const clicks = parseInt(row[14], 10) || 0;
    const hasSentOutreach = status === 'Outreach Sent' || tags.indexOf('Outreach_Sent') !== -1;
    const hasReply = ['Replied', 'Meeting', 'Opportunity'].indexOf(status) !== -1;
    const hasMeeting = ['Meeting', 'Opportunity'].indexOf(status) !== -1;
    const hasBounce = status === 'Bounced';

    if (!grouped[key]) {
      grouped[key] = {
        metricDate,
        clientId: 'VietnamMade',
        campaignId: campaign,
        campaignName: campaign,
        source,
        validLeads: 0,
        emailsSent: 0,
        bounces: 0,
        replies: 0,
        meetingsBooked: 0,
        emailOpens: 0,
        emailClicks: 0
      };
    }

    grouped[key].validLeads += 1;
    if (hasSentOutreach) grouped[key].emailsSent += 1;
    if (hasBounce) grouped[key].bounces += 1;
    if (hasReply) grouped[key].replies += 1;
    if (hasMeeting) grouped[key].meetingsBooked += 1;
    grouped[key].emailOpens += opens;
    grouped[key].emailClicks += clicks;
  });

  return Object.keys(grouped).sort().map(key => {
    const m = grouped[key];
    return [
      m.metricDate,
      m.clientId,
      m.campaignId,
      m.campaignName,
      m.source,
      m.validLeads,
      m.emailsSent,
      m.bounces,
      m.replies,
      m.meetingsBooked,
      m.emailOpens,
      m.emailClicks,
      safeRate(m.bounces, m.emailsSent),
      safeRate(m.replies, m.emailsSent),
      safeRate(m.meetingsBooked, m.emailsSent),
      safeRate(m.emailOpens, m.emailsSent),
      safeRate(m.emailClicks, m.emailsSent),
      now
    ];
  });
}

function getMetricsHeaders() {
  return [
    'metric_date',
    'client_id',
    'campaign_id',
    'campaign_name',
    'source',
    'valid_leads',
    'emails_sent',
    'bounces',
    'replies',
    'meetings_booked',
    'email_opens',
    'email_clicks',
    'bounce_rate',
    'reply_rate',
    'meeting_rate',
    'open_rate',
    'click_rate',
    'last_synced_at'
  ];
}

function safeRate(numerator, denominator) {
  if (!denominator) return 0;
  return numerator / denominator;
}

// ═══════════════════════════════════════════
// [FROM v3.0.0] HUMAN-IN-THE-LOOP OUTREACH
// ═══════════════════════════════════════════

function updateLeadStatus(id, status) {
  const sheet = initSheet();
  const data = sheet.getDataRange().getValues();
  const idx = data.findIndex(r => r[0] === id);
  
  if (idx === -1) throw "Lead not found";
  
  sheet.getRange(idx + 1, 10).setValue(status); 
  sheet.getRange(idx + 1, 12).setValue('Status → ' + status);
  
  logAction('STATUS_UPDATE', `Lead ${id} moved to ${status}`);
  return { status: 'ok' };
}

function generateAIDraft(id) {
  const sheet = initSheet();
  const data = sheet.getDataRange().getValues();
  const idx = data.findIndex(r => r[0] === id);
  
  if (idx === -1) throw "Lead not found";
  const lead = data[idx];
  
  const templates = [
    `Subject: Potential Collaboration: Vietnam Artisan Sourcing for ${lead[5]}\n\nHi ${lead[2]},\n\nI was impressed by ${lead[5]}'s commitment to quality. Given your interest in VietnamMade, I've prepared a brief lookbook of artisan ceramics that align with your brand aesthetic.\n\nWould you be open to a 5-minute intro call?\n\nBest regards,\nVietnamMade by Ready2US`,
    `Subject: Quick question about ${lead[5]} sourcing goals\n\nHi ${lead[2]},\n\nI noticed you're looking into Southeast Asian manufacturing. We've helped several California-based firms streamline their artisan sourcing with 100% ESG compliance.\n\nAre you available for a quick chat next Tuesday?\n\nBest,\nVietnamMade Team`,
    `Subject: ${lead[5]} + Vietnam Artisan Collection\n\nHi ${lead[2]},\n\nI came across ${lead[5]} and believe our curated collection of handcrafted Vietnamese ceramics would complement your product line beautifully.\n\nWe're currently offering complimentary sample kits to select B2B partners. Would you like me to send one over?\n\nWarm regards,\nVietnamMade by Ready2US`
  ];
  
  const draft = templates[Math.floor(Math.random() * templates.length)];
  
  sheet.getRange(idx + 1, 11).setValue(draft); 
  sheet.getRange(idx + 1, 12).setValue('AI Draft Generated'); 
  
  logAction('AI_DRAFT', `Generated outreach for ${lead[3]}`);
  return { status: 'ok', draft: draft };
}

function approveDraft(id, content) {
  const sheet = initSheet();
  const data = sheet.getDataRange().getValues();
  const idx = data.findIndex(r => r[0] === id);
  
  if (idx === -1) throw "Lead not found";
  
  sheet.getRange(idx + 1, 11).setValue(content);
  sheet.getRange(idx + 1, 10).setValue('Outreach Sent');
  sheet.getRange(idx + 1, 12).setValue('Email Sent via Gmail');
  
  // [FROM CODEX] Add tag for outreach tracking
  const existingTags = sheet.getRange(idx + 1, 13).getValue() || '';
  if (!existingTags.includes('Outreach_Sent')) {
    sheet.getRange(idx + 1, 13).setValue(existingTags + (existingTags ? ',' : '') + 'Outreach_Sent');
  }
  
  const email = data[idx][3];
  const subject = content.split('\n')[0].replace('Subject: ', '');
  const body = content.split('\n').slice(2).join('\n');
  
  try {
    GmailApp.sendEmail(email, subject, body);
    logAction('EMAIL_SENT', `Outreach sent to ${email}`);
    return { status: 'ok' };
  } catch (e) {
    logAction('EMAIL_ERROR', `Failed to send to ${email}: ${e.toString()}`);
    return { status: 'error', message: 'Gmail send failed: ' + e.toString() };
  }
}

// ═══════════════════════════════════════════
// [FROM CODEX] DAILY SUMMARY
// ═══════════════════════════════════════════

function getDailySummary() {
  const sheet = initSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data.shift();
  
  const stats = {
    total: data.length,
    today: 0,
    bySource: {},
    byTags: {},
    highQuality: 0,
    newLeads: 0,
    totalOpens: 0,
    totalClicks: 0
  };
  
  const todayStr = new Date().toDateString();
  
  data.forEach(row => {
    const timestamp = new Date(row[1]);
    const source = row[7] || 'Direct';
    const score = parseInt(row[8]) || 0;
    const status = row[9];
    const tags = (row[12] || '').toString();
    const opens = parseInt(row[13]) || 0;
    const clicks = parseInt(row[14]) || 0;
    
    if (timestamp.toDateString() === todayStr) stats.today++;
    if (status === 'New Lead') stats.newLeads++;
    if (score >= 70) stats.highQuality++;
    
    stats.bySource[source] = (stats.bySource[source] || 0) + 1;
    stats.totalOpens += opens;
    stats.totalClicks += clicks;
    
    // Aggregate tags
    if (tags) {
      tags.split(',').forEach(t => {
        const tag = t.trim();
        if (tag) stats.byTags[tag] = (stats.byTags[tag] || 0) + 1;
      });
    }
  });
  
  return stats;
}

// ═══════════════════════════════════════════
// UTILITIES (HYBRID)
// ═══════════════════════════════════════════

function initSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(SHEET_NAME);
  if (!s) {
    s = ss.insertSheet(SHEET_NAME);
    const headers = [
      'Lead ID', 'Timestamp', 'Name', 'Email', 'Phone', 'Company',
      'Campaign', 'Source', 'Score', 'Status', 'AI Draft', 'Last Action',
      'Tags', 'Email Opens', 'Email Clicks', 'Last Tracked'
    ];
    s.appendRow(headers).getRange(1, 1, 1, headers.length).setBackground('#001F3F').setFontColor('#FFFFFF').setFontWeight('bold');
    s.setFrozenRows(1);
  }
  return s;
}

function initMetricsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(METRICS_SHEET);
  if (!s) {
    s = ss.insertSheet(METRICS_SHEET);
    const headers = getMetricsHeaders();
    s.appendRow(headers).getRange(1, 1, 1, headers.length).setBackground('#001F3F').setFontColor('#FFFFFF').setFontWeight('bold');
    s.setFrozenRows(1);
  }
  return s;
}

function logAction(type, message) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let s = ss.getSheetByName(LOG_SHEET);
    if (!s) {
      s = ss.insertSheet(LOG_SHEET);
      s.appendRow(['Timestamp', 'Type', 'Message']).getRange(1,1,1,3).setBackground('#333').setFontColor('#fff').setFontWeight('bold');
      s.setFrozenRows(1);
    }
    s.appendRow([new Date(), type, message]);
  } catch (e) {} // Silently fail — logging should never break core flow
}

const resp = (d, h) => ContentService.createTextOutput(JSON.stringify(d)).setMimeType(ContentService.MimeType.JSON);

const getToken = (u) => {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, u + ADMIN.salt + new Date().toDateString());
  return bytes.map(b => ('0' + (b & 0xFF).toString(16)).slice(-2)).join('').substring(0, 32);
};

/** 
 * TEST FUNCTION: Validates both scoring and email tracking.
 */
function runTestEmails() {
  const testEmail = 'lichmedia@gmail.com';
  const testName = 'James Test';
  const testId = 'test-uuid-12345';
  
  // Test scoring
  const score1 = calculateScore({ email: 'ceo@vietceramics.com', company: 'Viet Ceramics Inc', phone: '+1234567890' });
  const score2 = calculateScore({ email: 'random@gmail.com' });
  Logger.log(`B2B Score: ${score1} | Generic Score: ${score2}`);
  
  // Test emails
  sendTrackedMail(testEmail, testName, testId, SETTINGS['VietnamMade_VI']);
  sendTrackedMail(testEmail, testName, testId, SETTINGS['VietnamMade_EN_Brochure']);
  
  Logger.log('Test emails sent to ' + testEmail);
}

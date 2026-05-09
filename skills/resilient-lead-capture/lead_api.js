/**
 * Antigravity Lead API v1.1.0 - Template
 * Reusable connector for pushing leads to Google Sheets via Apps Script.
 * Enhanced with LocalStorage resilience for high reliability.
 * 
 * PROMOTED TO TIER 1 MASTER: 2026-05-09
 */

const CONFIG = {
  scriptUrl: (window.AGOS_CONFIG && window.AGOS_CONFIG.endpoints && window.AGOS_CONFIG.endpoints.lead)
    || 'PASTE_YOUR_APPS_SCRIPT_URL_HERE',
};

const LeadAPI = {
  scriptUrl: CONFIG.scriptUrl,

  /**
   * Automatically captures tracking parameters from the URL.
   */
  getTrackingData: function() {
    const params = new URLSearchParams(window.location.search);
    return {
      campaign: params.get('utm_campaign') || 'CAMPAIGN_NAME',
      source: params.get('utm_source') || 'SOURCE_NAME',
      medium: params.get('utm_medium') || 'direct',
      lead_id: crypto.randomUUID(),
      timestamp: new Date().toISOString()
    };
  },

  /**
   * Submits lead data to the backend with LocalStorage fallback.
   */
  submitLead: async function(formData) {
    const tracking = this.getTrackingData();
    const payload = {
      ...tracking,
      ...formData
    };

    const storageKey = `lead_pending_${payload.lead_id}`;
    
    // Step 1: Save to local storage before attempt
    localStorage.setItem(storageKey, JSON.stringify(payload));
    console.log('[LeadAPI] Backup created in LocalStorage:', payload.lead_id);

    try {
      const response = await fetch(this.scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Step 2: Remove from local storage on successful transmission
      localStorage.removeItem(storageKey);
      console.log('[LeadAPI] Success. Backup removed.');
      return { status: 'success', message: 'Data sent' };
    } catch (error) {
      console.error('[LeadAPI] Network Error. Lead preserved in LocalStorage.', error);
      // We don't remove the storage item here, it will be handled by syncPendingLeads
      throw error;
    }
  },

  /**
   * Scans LocalStorage for unsent leads and attempts to sync them.
   */
  syncPendingLeads: async function() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('lead_pending_'));
    if (keys.length === 0) return;

    console.log(`[LeadAPI] Found ${keys.length} pending leads. Attempting sync...`);
    
    for (const key of keys) {
      try {
        const payload = JSON.parse(localStorage.getItem(key));
        await fetch(this.scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload)
        });
        localStorage.removeItem(key);
        console.log(`[LeadAPI] Synced: ${payload.lead_id}`);
      } catch (err) {
        console.warn(`[LeadAPI] Sync failed for ${key}, will retry next session.`);
      }
    }
  }
};

// Background Sync on Init
LeadAPI.syncPendingLeads();
console.log('[LeadAPI] Initialized with Sync Resilience.');

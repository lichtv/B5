/**
 * Antigravity Lead API v1.0.0
 * Reusable connector for pushing leads to Google Sheets via Apps Script.
 */

const LeadAPI = {
  scriptUrl: (window.AGOS_CONFIG && window.AGOS_CONFIG.endpoints && window.AGOS_CONFIG.endpoints.lead)
    || 'https://script.google.com/macros/s/AKfycbzCqpbRKDWx8lkzZ4Q7mJAXFlC_kPnZRbAdGvC4RbPDLq-gjglCsDOU3iOw7AE0tl3y/exec',

  /**
   * Automatically captures tracking parameters from the URL.
   */
  getTrackingData: function() {
    const params = new URLSearchParams(window.location.search);
    return {
      campaign: params.get('utm_campaign') || 'VietnamMade_VI',
      source: params.get('utm_source') || 'Direct',
      medium: params.get('utm_medium') || 'web',
      lead_id: crypto.randomUUID(),
      timestamp: new Date().toISOString()
    };
  },

  /**
   * Submits lead data to the backend.
   * @param {Object} formData - Data from the form (fullName, email, phone, etc.)
   * @returns {Promise} - The result of the fetch operation.
   */
  submitLead: async function(formData) {
    const tracking = this.getTrackingData();
    const payload = {
      ...tracking,
      ...formData
    };

    console.log('[LeadAPI] Submitting:', payload);

    try {
      const response = await fetch(this.scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple POST or redirects
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Since mode is 'no-cors', we won't get a readable response body,
      // but the data will be sent successfully.
      return { status: 'success', message: 'Data sent' };
    } catch (error) {
      console.error('[LeadAPI] Error:', error);
      throw error;
    }
  }
};

// Auto-initialize tracking in console for debugging
console.log('[LeadAPI] Active Tracking:', LeadAPI.getTrackingData());

/**
 * AGOS v3.0.0 HYBRID — Global Funnel JS Logic
 * FROM v3.0.0: Premium UI, Smart Recognition, Exit Intent
 * FROM CODEX:  Auto-Tagging, UTM Tracking, Source Attribution
 */

const CAMPAIGN_CONFIG = {
  campaignName: 'VietnamMade_VI',
  webAppUrl: (window.AGOS_CONFIG && window.AGOS_CONFIG.endpoints && window.AGOS_CONFIG.endpoints.core)
    || 'https://script.google.com/macros/s/AKfycbzCqpbRKDWx8lkzZ4Q7mJAXFlC_kPnZRbAdGvC4RbPDLq-gjglCsDOU3iOw7AE0tl3y/exec'
};

document.addEventListener('DOMContentLoaded', function () {
  // --- UI Elements ---
  const header = document.getElementById('page-header');
  const menuBtn = document.getElementById('menu-button') || document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const backToTopBtn = document.getElementById('back-to-top');
  const shareBtn = document.getElementById('share-btn');
  const exitModal = document.getElementById('exit-intent-modal');
  const exitModalContent = document.getElementById('modal-content');

  // --- Header & Scroll Logic ---
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
      }
    }
  });

  if (menuBtn && mobileMenu) {
    const toggleMenu = (forceClose = false) => {
      const isCurrentlyOpen = mobileMenu.classList.contains('flex');
      if (forceClose || isCurrentlyOpen) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    };

    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });

    // Close button inside menu
    const closeBtn = document.getElementById('mobile-menu-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu(true);
      });
    }

    // Auto-close on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(true);
      });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const makeId = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

  const submitLead = async (payload) => {
    if (window.LeadAPI && typeof LeadAPI.submitLead === 'function') {
      return LeadAPI.submitLead(payload);
    }

    return fetch(CAMPAIGN_CONFIG.webAppUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    });
  };

  function setupLeadForm(formId, suffix = '') {
    const leadForm = document.getElementById(formId);
    if (!leadForm) return;

    const emailInput = document.getElementById('lead-email' + suffix);
    const emailConfirmInput = document.getElementById('lead-email-confirm' + suffix);

    if (emailConfirmInput) {
      emailConfirmInput.addEventListener('paste', (e) => {
        e.preventDefault();
        alert('Vui lòng gõ lại email để xác nhận độ chính xác!');
      });
    }

    if (emailInput && formId === 'lead-form') {
      const extendedFields = document.getElementById('extended-fields');
      const maybeShowExtendedFields = () => {
        if (extendedFields && emailInput.value.trim().includes('@') && emailInput.value.trim().length > 5) {
          extendedFields.classList.remove('hidden');
        }
      };

      emailInput.addEventListener('input', maybeShowExtendedFields);
      maybeShowExtendedFields();
    }

    leadForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const btnText = document.getElementById('btn-text' + suffix);
      const btnLoading = document.getElementById('btn-loading' + suffix);
      const errEl = document.getElementById('form-error' + suffix);
      const submitBtn = document.getElementById('lead-submit-btn' + suffix);

      if (errEl) errEl.classList.add('hidden');

      if (emailConfirmInput && emailInput.value.trim().toLowerCase() !== emailConfirmInput.value.trim().toLowerCase()) {
        if (errEl) {
          errEl.textContent = '❌ Vui lòng kiểm tra lại email xác nhận.';
          errEl.classList.remove('hidden');
        }
        return;
      }

      if (btnText) btnText.classList.add('hidden');
      if (btnLoading) btnLoading.classList.remove('hidden');
      if (submitBtn) submitBtn.disabled = true;

      const payload = {
        lead_id: makeId(),
        timestamp: new Date().toISOString(),
        fullName: document.getElementById('lead-name' + suffix).value,
        email: emailInput.value.trim(),
        phone: document.getElementById('lead-phone' + suffix).value,
        company: document.getElementById('lead-company' + suffix).value,
        campaign: CAMPAIGN_CONFIG.campaignName,
        source: 'Home_Page_LeadMagnet',
        tags: 'Web_Form',
        agos_token: 'AGOS_SECURE_2026'
      };

      try {
        await submitLead(payload);
        localStorage.setItem('user_email', payload.email);

        const successEl = document.getElementById('form-success' + suffix);
        if (successEl) {
          successEl.classList.remove('hidden');
          leadForm.classList.add('hidden');
        }

        setTimeout(() => {
          const assessmentCompleted = localStorage.getItem('assessment_completed') === 'true';
          const target = assessmentCompleted ? '/Global-Sale/index.html' : '/Global-Sale/assessment.html';
          window.location.href = `${target}?from=leadmagnet&email=${encodeURIComponent(payload.email)}`;
        }, 2000);
      } catch (err) {
        if (errEl) {
          errEl.textContent = '❌ Lỗi kết nối. Vui lòng thử lại.';
          errEl.classList.remove('hidden');
        }
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  const assessmentDone = localStorage.getItem('assessment_completed') === 'true';
  if (assessmentDone && window.location.hash === '#lead-magnet') {
    const successEl = document.getElementById('form-success');
    const formEl = document.getElementById('lead-form');
    if (successEl && formEl) {
      successEl.classList.remove('hidden');
      formEl.classList.add('hidden');
      successEl.innerHTML = '🎉 Chào mừng quay lại! Cẩm nang đã được gửi tới email của bạn. <br><br> <a href="/Global-Sale/index.html" class="text-blue-600 underline font-bold">Tiếp tục lộ trình Global Sale</a>';
    }
  }

  setupLeadForm('lead-form');

  let exitIntentShown = sessionStorage.getItem('exit_intent_shown') === 'true';
  const startTime = Date.now();

  document.addEventListener('mouseleave', (e) => {
    const timeOnPage = (Date.now() - startTime) / 1000;
    const scrollY = window.scrollY;

    if (e.clientY < 0 && !exitIntentShown && exitModal && timeOnPage > 8 && scrollY > 200) {
      exitIntentShown = true;
      sessionStorage.setItem('exit_intent_shown', 'true');
      exitModal.classList.remove('hidden');
      exitModal.classList.add('flex');

      if (exitModalContent) {
        setTimeout(() => {
          exitModalContent.classList.remove('scale-95', 'opacity-0');
          exitModalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
      }
    }
  });

  const closeExitBtn = document.getElementById('close-exit-modal');
  if (closeExitBtn && exitModal) {
    closeExitBtn.addEventListener('click', () => {
      exitModal.classList.add('hidden');
      exitModal.classList.remove('flex');
    });
  }

  const exitForm = document.getElementById('exit-form');
  if (exitForm) {
    exitForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const payload = {
        lead_id: makeId(),
        timestamp: new Date().toISOString(),
        fullName: 'Exit Intent Lead',
        email: document.getElementById('exit-email').value,
        phone: 'N/A',
        company: 'N/A',
        campaign: 'VietnamMade_Exit_VI',
        source: 'Home_Page_ExitIntent',
        tags: 'Exit_Intent',
        agos_token: 'AGOS_SECURE_2026'
      };

      try {
        await submitLead(payload);
        localStorage.setItem('user_email', payload.email);
        const assessmentCompleted = localStorage.getItem('assessment_completed') === 'true';
        const target = assessmentCompleted ? '/Global-Sale/index.html' : '/Global-Sale/assessment.html';
        window.location.href = `${target}?from=leadmagnet&email=${encodeURIComponent(payload.email)}`;
      } catch (err) {
        if (exitModal) exitModal.classList.add('hidden');
      }
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'VietnamMade by Ready2US',
            text: 'Khám phá các thương hiệu Việt Nam tiêu biểu sẵn sàng cho thị trường quốc tế.',
            url: window.location.href
          });
        } catch (err) {
          console.log('Error sharing:', err);
        }
      } else {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Link đã được sao chép!');
      }
    });
  }

  const storedEmail = localStorage.getItem('user_email');
  const urlParams = new URLSearchParams(window.location.search);
  const currentEmail = urlParams.get('email');

  if (currentEmail) {
    localStorage.setItem('user_email', currentEmail);
  }

  if (storedEmail || currentEmail) {
    const userEmail = currentEmail || storedEmail;
    document.querySelectorAll('a[href="#lead-magnet"]').forEach(btn => {
      btn.textContent = 'Tiếp tục lộ trình Global Sale';
      btn.href = `/Global-Sale/index.html?source=smart_recognition&email=${encodeURIComponent(userEmail)}`;
      btn.removeAttribute('onclick');
    });

    const heroSub = document.querySelector('#home p');
    if (heroSub) {
      heroSub.innerHTML = 'Chào mừng bạn quay lại! Bạn đã sẵn sàng để đưa thương hiệu vươn tầm quốc tế? <br> <span class="font-bold text-white">Lộ trình Global Sale đang chờ bạn.</span>';
    }
  }

  window.unlockGlobalSale = function () {
    const email = localStorage.getItem('user_email');
    if (email) {
      window.location.href = `/Global-Sale/index.html?source=vn_bridge_direct&email=${encodeURIComponent(email)}`;
      return;
    }

    const target = document.getElementById('lead-magnet');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const emailInput = document.getElementById('lead-email');
        if (emailInput) {
          emailInput.focus();
          emailInput.classList.add('ring-2', 'ring-red-500');
          setTimeout(() => emailInput.classList.remove('ring-2', 'ring-red-500'), 2000);
        }
      }, 800);
    }
  };

  window.selectPackage = function (packageName) {
    const email = localStorage.getItem('user_email') || 'Unknown';
    const payload = {
      fullName: 'Package Selection (VI)',
      email: email,
      phone: 'N/A',
      company: packageName,
      campaign: 'VietnamMade_Package_Selected',
      source: 'Package_Selection',
      tags: 'Package_Selected'
    };

    submitLead(payload);

    const modal = document.getElementById('package-success-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const nameEl = document.getElementById('selected-package-name');
      if (nameEl) nameEl.textContent = packageName;
    }
  };

  window.closeSuccessModal = function () {
    const email = localStorage.getItem('user_email') || 'Unknown';
    const nameEl = document.getElementById('selected-package-name');
    const packageName = nameEl ? nameEl.textContent : 'Unknown';
    window.location.href = `/Global-Sale/assessment.html?email=${encodeURIComponent(email)}&package=${encodeURIComponent(packageName)}`;
  };

  let selectedStatus = '';
  window.openQuiz = function () {
    const modal = document.getElementById('quiz-modal');
    const content = document.getElementById('quiz-content');
    if (modal && content) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
      }, 10);
    }
  };

  window.closeQuiz = function () {
    const modal = document.getElementById('quiz-modal');
    const content = document.getElementById('quiz-content');
    if (modal && content) {
      content.classList.remove('scale-100', 'opacity-100');
      content.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.getElementById('quiz-step-1').classList.remove('hidden');
        document.getElementById('quiz-step-2').classList.add('hidden');
        document.getElementById('quiz-step-3').classList.add('hidden');
      }, 300);
    }
  };

  window.nextQuizStep = function (status) {
    selectedStatus = status;
    document.getElementById('quiz-step-1').classList.add('hidden');
    document.getElementById('quiz-step-2').classList.remove('hidden');
  };

  const quizForm = document.getElementById('quiz-form');
  if (quizForm) {
    quizForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Đang xử lý...';

      const payload = {
        fullName: document.getElementById('quiz-name').value,
        email: document.getElementById('quiz-email').value,
        phone: document.getElementById('quiz-phone').value,
        company: `Quiz: ${selectedStatus}`,
        campaign: 'VietnamMade_VI_MicroQuiz',
        source: 'MicroQuiz',
        tags: 'Assessment_Lead',
        selected_status: selectedStatus
      };

      localStorage.setItem('user_email', payload.email);

      try {
        await submitLead(payload);
        document.getElementById('quiz-step-2').classList.add('hidden');
        document.getElementById('quiz-step-3').classList.remove('hidden');
      } catch (err) {
        alert('Có lỗi kết nối. Vui lòng thử lại.');
        submitBtn.disabled = false;
      }
    });
  }
});

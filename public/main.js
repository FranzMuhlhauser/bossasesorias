/* ============================================================
   BOSS ASESORÍAS - main.js
   Interactive functionality for the static HTML/CSS site
   ============================================================ */

/* ─── 1. HEADER: Scroll state + mobile menu ─── */
(function () {
  const header       = document.getElementById('main-header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu   = document.getElementById('mobile-menu');
  const iconMenu     = document.getElementById('icon-menu');
  const iconClose    = document.getElementById('icon-close');
  const logoAnchor   = document.getElementById('logo-anchor');

  let menuOpen = false;

  function updateScrolledState() {
    const scrolled = window.scrollY > 20;
    if (scrolled || menuOpen) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateScrolledState, { passive: true });
  updateScrolledState();

  function toggleMobileMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.add('open');
      header.classList.add('menu-open');
      iconMenu.style.display  = 'none';
      iconClose.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('open');
      header.classList.remove('menu-open');
      iconMenu.style.display  = 'block';
      iconClose.style.display = 'none';
      document.body.style.overflow = '';
      updateScrolledState();
    }
  }

  window.closeMobileMenu = function () {
    if (menuOpen) toggleMobileMenu();
  };

  hamburgerBtn.addEventListener('click', toggleMobileMenu);
})();


/* ─── 2. ACTIVE NAV LINK on scroll ─── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function onScroll() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ─── 3. WHATSAPP FLOAT BUTTON visibility ─── */
(function () {
  const btn = document.getElementById('whatsapp-float');

  function updateFloatVisibility() {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', updateFloatVisibility, { passive: true });
  updateFloatVisibility();
})();


/* ─── 4. ACCORDION / FAQ ─── */
(function () {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const content    = trigger.nextElementSibling;

      // Close all other items first
      triggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherContent = otherTrigger.nextElementSibling;
          if (otherContent) otherContent.classList.remove('open');
        }
      });

      // Toggle the clicked item
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (content) {
        content.classList.toggle('open', !isExpanded);
      }
    });
  });
})();


/* ─── 5. CONTACT FORM with validation & toast ─── */
(function () {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const toast      = document.getElementById('toast');

  if (!form) return;

  function showToast(message, type) {
    toast.textContent = message;
    toast.className   = 'toast show ' + type;
    setTimeout(() => {
      toast.className = 'toast';
    }, 5500);
  }

  function validateField(input) {
    const errorEl = document.getElementById(input.id + '-error');
    let msg = '';

    if (input.required && !input.value.trim()) {
      msg = 'Este campo es obligatorio.';
    } else if (input.type === 'email' && input.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(input.value.trim())) {
        msg = 'Ingresa un correo electrónico válido.';
      }
    }

    if (errorEl) errorEl.textContent = msg;
    if (msg) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
    return !msg;
  }

  // Real-time validation on blur
  const fields = form.querySelectorAll('.form-input, .form-textarea');
  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    requiredFields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      showToast('Por favor, completa los campos obligatorios correctamente.', 'error');
      return;
    }

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      // Build the WhatsApp redirect with form data as an alternative delivery
      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const phone   = form.phone.value.trim();
      const message = form.message.value.trim();

      const waText = `Hola, mi nombre es ${name}.\n📧 Email: ${email}${phone ? '\n📞 Teléfono: ' + phone : ''}\n\n💬 Mensaje:\n${message}`;
      const waUrl  = `https://api.whatsapp.com/send?phone=56992895726&text=${encodeURIComponent(waText)}`;

      // Simulate a brief async action (replace with actual fetch to backend if needed)
      await new Promise(resolve => setTimeout(resolve, 800));

      // Open WhatsApp with the form data
      window.open(waUrl, '_blank');

      // Show success, reset form
      showToast('¡Mensaje enviado! Te redirigimos a WhatsApp para completar la comunicación.', 'success');
      form.reset();
      fields.forEach(f => f.classList.remove('invalid'));

    } catch (err) {
      showToast('Ocurrió un error. Por favor intenta nuevamente o contáctanos por WhatsApp.', 'error');
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Enviar Mensaje';
    }
  });
})();


/* ─── 6. FOOTER: current year ─── */
(function () {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ─── 7. SCROLL-REVEAL - subtle entrance on viewport ─── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.card, .news-card, .contact-info, .contact-form-wrap, .accordion-item, .cultura-item'
  );

  targets.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(el => observer.observe(el));
})();

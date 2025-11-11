/* script.js - Poly Academy */

/* 1. Mobile menu toggle */
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if(menuBtn && mainNav){
  menuBtn.addEventListener('click', () => mainNav.classList.toggle('open'));
}

/* 2. Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

/* 3. Fade-in on scroll */
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
},{threshold: 0.15});
faders.forEach(f => appearOnScroll.observe(f));

/* 4. Lazy load images */
const lazyImgs = document.querySelectorAll('img.lazy');
const lazyObserver = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const img = entry.target;
      const src = img.getAttribute('data-src');
      if(src){ img.src = src; img.removeAttribute('data-src'); }
      obs.unobserve(img);
    }
  });
},{rootMargin:'0px 0px 200px 0px'});
lazyImgs.forEach(i => lazyObserver.observe(i));

/* 5. Simple slider for events */
const slider = document.getElementById('eventsSlider');
if(slider){
  let index = 0;
  const slides = slider.querySelectorAll('.slide');
  setInterval(()=>{
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 3500);
}

/* 6. Back to top */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 400) backTop.style.display = 'flex';
  else backTop.style.display = 'none';
});
if(backTop) backTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

/* 7. Newsletter using localStorage */
const newsletterForm = document.getElementById('newsletterForm');
if(newsletterForm){
  newsletterForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('newsEmail').value;
    if(!email) return alert('Digite um email válido');
    localStorage.setItem('poly_news', email);
    alert('Obrigado! Você está inscrito na newsletter.');
    newsletterForm.reset();
  });
}

/* 8. Modal for plan details */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
document.addEventListener('click', e=>{
  const target = e.target;
  // open details buttons
  if(target.dataset && target.dataset.modal){
    const id = target.dataset.modal;
    let html = '<h3>Detalhes do plano</h3>';
    if(id.includes('basico')) html += '<p>Plano básico: livre acesso à academia e salas comuns.</p>';
    if(id.includes('premium')) html += '<p>Plano premium: aulas ilimitadas, um treinador mensal e acesso VIP.</p>';
    if(id.includes('vip')) html += '<p>Plano VIP: personal trainer, nutricionista e benefícios exclusivos.</p>';
    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
  }
  if(target.classList.contains('modal-close') || target.classList.contains('modal')){
    if(modal) { modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); }
  }
});

/* 9. Contact form validation (fake submission) */
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('mensagem').value.trim();
    if(!name || !email || !msg) return alert('Preencha todos os campos.');
    // fake send
    alert('Mensagem enviada! Obrigado, ' + name + '.');
    contactForm.reset();
  });
}

/* 10. Accordion */
document.querySelectorAll('.accordion-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const panel = btn.nextElementSibling;
    const open = panel.style.maxHeight && panel.style.maxHeight !== '0px';
    document.querySelectorAll('.panel').forEach(p=>p.style.maxHeight = null);
    if(!open) panel.style.maxHeight = panel.scrollHeight + 'px';
  });
});
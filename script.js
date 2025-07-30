// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');

mobileLinks.forEach(link => {
link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
    });
    }
});
});

// Adicionar efeito de destaque pulsante para o lançamento
document.addEventListener('DOMContentLoaded', function () {
// Destacar o badge "NOVO" com animação
const newBadges = document.querySelectorAll('.new-badge');

newBadges.forEach(badge => {
    badge.classList.add('pulse');
});
});

/* AQUI É A GALERIA DE IMAGENS */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#servicos .report-image-container', // todos os containers
    children: 'a',
    pswpModule: PhotoSwipe
  });

  lightbox.init();
});

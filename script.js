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
        // offset padrão
        let offset = 80;

        // exceções para IDs específicos
        if (targetId === "#service-details-1" || targetId === "#service-details-2") {
          offset = 110; // valor diferente
        }

        window.scrollTo({
          top: targetElement.offsetTop - offset,
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

  // Inicializar basicLightbox para as imagens da galeria
  document.querySelectorAll('.report-image-container a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const src = link.getAttribute('href');
      const instance = basicLightbox.create(`<img src="${src}" style="max-width: 90vw; max-height: 90vh;">`);
      instance.show();
    });
  });
});

/* CARROSSEL */

const bannerContent = document.querySelector('.banner-content');
const slides = document.querySelectorAll('.banner-slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.banner-slide').length;

function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula o deslocamento horizontal
  bannerContent.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop para o final
  updateCarousel();
  resetAutoSlide(); // Reinicia o temporizador ao clicar
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop para o início
  updateCarousel();
  resetAutoSlide(); // Reinicia o temporizador ao clicar
});

/* // Inicializa o carrossel
// Função para mudar automaticamente a cada 5 segundos
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length; // Passa para a próxima página
  updateCarousel();
}, 5000); // 5000ms = 5 segundos */

// Função para reiniciar o temporizador de mudança automática
function resetAutoSlide() {
  clearInterval(autoSlide); // Para o temporizador atual
  autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length; // Passa para a próxima página
      updateCarousel();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const offsetX = -25;
  const offsetY = -35;

  const polyline = document.querySelector("svg polyline");
  if (!polyline) return;

  const svg = polyline.ownerSVGElement;
  const [minX, minY] = svg.getAttribute("viewBox").split(" ").map(Number);

  const points = polyline.getAttribute("points")
    .trim()
    .split(/\s+/)
    .map(p => p.split(",").map(Number));

  points.forEach((point, index) => {
    // Busca todos os steps que correspondem a esse número (slide 1 e slide 2)
    const steps = document.querySelectorAll(`[id^="step${index + 1}"]`);
    steps.forEach(step => {
      const [x, y] = point;
      step.style.left = `${(x - minX) + offsetX}px`;
      step.style.top = `${(y - minY) + offsetY}px`;
    });
  });
});

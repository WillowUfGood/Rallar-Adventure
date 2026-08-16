document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-tour-carousel]');

  carousels.forEach((carousel) => {
    const images = Array.from(carousel.querySelectorAll('.tour-image'));
    if (!images.length) return;

    let currentIndex = 0;

    const showImage = (index) => {
      currentIndex = (index + images.length) % images.length;
      images.forEach((img, idx) => {
        img.classList.toggle('active', idx === currentIndex);
      });
    };

    const prevBtn = carousel.parentElement.querySelector('.tour-arrow-prev');
    const nextBtn = carousel.parentElement.querySelector('.tour-arrow-next');

    prevBtn?.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn?.addEventListener('click', () => showImage(currentIndex + 1));

    showImage(0);
  });
});

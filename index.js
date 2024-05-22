
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const bullets = document.querySelectorAll('.bullet');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    bullets[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    bullets[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(n) {
    showSlide(n);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        goToSlide(index);
    });
});


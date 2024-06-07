const lang = document.getElementById('lang')

lang.addEventListener('click', function () {
    if (this.textContent === "eng") {
        this.textContent = "ქარ"
        return

    }
    this.textContent = "eng"


})





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

if(nextButton && prevButton){

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}







class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.carousel = this.container.querySelector('.carousel');
        this.items = this.carousel.querySelectorAll('.carousel-item');

        this.prevButton = this.container.querySelector('.prev');
        this.nextButton = this.container.querySelector('.next');
        this.currentIndex = 0;

        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());

        // Variables for mouse drag
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;

        this.carousel.addEventListener('mousedown', (e) => this.startDrag(e));
        this.carousel.addEventListener('mousemove', (e) => this.drag(e));
        this.carousel.addEventListener('mouseup', () => this.endDrag());
        this.carousel.addEventListener('mouseleave', () => this.endDrag());
        this.carousel.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]));
        this.carousel.addEventListener('touchmove', (e) => this.drag(e.touches[0]));
        this.carousel.addEventListener('touchend', () => this.endDrag());

        this.updateCarousel();
    }

    updateCarousel() {
        const itemWidth = this.items[0].clientWidth;
        this.carousel.style.transform = `translateX(${(-this.currentIndex * itemWidth)}px)`;
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }

    next() {
        if (this.currentIndex < this.items.length - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    startDrag(e) {
        this.isDragging = true;
        this.startX = e.clientX;
        this.prevTranslate = this.currentTranslate;
        this.animationID = requestAnimationFrame(this.animation.bind(this));
    }

    drag(e) {
        if (this.isDragging) {
            const currentPosition = e.clientX;
            this.currentTranslate = this.prevTranslate + currentPosition - this.startX;
        }
    }

    endDrag() {
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);

        const itemWidth = this.items[0].clientWidth;
        this.currentIndex = Math.max(0, Math.min(this.items.length - 1, Math.round(-this.currentTranslate / itemWidth)));
        this.updateCarousel();
    }

    animation() {
        this.setTranslateX(this.currentTranslate);
        if (this.isDragging) {
            requestAnimationFrame(this.animation.bind(this));
        }
    }

    setTranslateX(value) {
        this.carousel.style.transform = `translateX(${value}px)`;
    }
}


const carousels = ['carousel1', 'carousel2', 'carousel3', 'carousel4'];
carousels.forEach(id => new Carousel(id));








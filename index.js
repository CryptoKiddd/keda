const lang = document.getElementById('lang')

lang.addEventListener('click',function(){
    if(this.textContent ==="eng"){
        this.textContent = "ქარ"
        return

    }
    this.textContent = "eng"
    console.log('lcliked')

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

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        goToSlide(index);
    });
});






///sakrebulos da meriis karuselebi
class Carousel {
    constructor(containerId) {
        this.id = containerId
        this.container = document.getElementById(containerId);
        this.carousel = this.container.querySelector('.carousel');

        this.prevButton = this.container.querySelector('.prev');
        this.nextButton = this.container.querySelector('.next');
        this.currentIndex = 0;

        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());

        this.updateCarousel();
    }

    updateCarousel() {
        const itemWidth = this.carousel.querySelector('.carousel-item').clientWidth;
        this.carousel.style.transform = `translateX(${-this.currentIndex * itemWidth}px)`;
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }

    next() {
        if(this.id === "carousel3" || this.id === "carousel4"){

            if (this.currentIndex < this.carousel.children.length-1) {
                this.currentIndex++;
                this.updateCarousel();
            }
            return
        }
        if (this.currentIndex < this.carousel.children.length - 4) {
            this.currentIndex++;
            this.updateCarousel();
        }

    }
}

// Create instances of Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel1 = new Carousel('carousel1');
    const carousel2 = new Carousel('carousel2');
    const carousel3 = new Carousel('carousel3');
    const carousel4 = new Carousel('carousel4');
});
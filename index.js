document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const submenus = document.querySelectorAll('.submenu');
    const expandedSubmenu = document.getElementById('expanded-submenu');
    function closeAllSubmenus() {
        submenus.forEach(submenu => {
            submenu.style.display = 'none';
        });
        expandedSubmenu.style.display = 'none';
    }


    //submenus gamochena navigaciis itemze hoverisas
    navItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            closeAllSubmenus();
            expandedSubmenu.style.display = 'none';
            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            if (submenu) {
                submenu.style.display = 'block';
                submenu.style.left = this.getBoundingClientRect().left +'px';
                submenu.style.top = this.getBoundingClientRect().top +52+ 'px';

            }
        });
    });
// tu am qvemenius yavs wevri romelic ishleba , isari tu aq marjvniv is itvleba gasashlelad,

       document.querySelectorAll('.submenu li').forEach(bullet => {
        bullet.addEventListener('mouseover', function () {
            expandedSubmenu.style.display = 'none';
            if (this.textContent.includes('>') ) { 
             
               
                expandedSubmenu.style.display = 'block';

                expandedSubmenu.style.left = this.getBoundingClientRect().right + 'px';
                expandedSubmenu.style.top = this.getBoundingClientRect().top + 'px';
               
            }
            
            
        });

        expandedSubmenu.addEventListener('mouseleave', closeAllSubmenus)
    });



});







////////////////////slider
document.addEventListener("DOMContentLoaded", function() {
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
  });

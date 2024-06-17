const hamburger = document.querySelector('#hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const meriaExpandBtn = document.querySelector('#meria-expand-btn')
const branchesExpandBtn = document.querySelector('#branches-expand-btn')
const meriaExpandMenu = document.querySelector('#meria-expand-menu')
const branchesExpandMenu = document.querySelector('#branches-expand-menu')
const closeMeria = document.querySelector('.meria-nav-prev')
const closeBranches = document.querySelector('.branches-nav-prev')


document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    console.log(currentLocation)

    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach(item => {
        console.log(this.parentElement)
        if (this.parentElement.getAttribute('href') === currentLocation || item.firstElementChild.getAttribute('href') === currentLocation) {
            this.classList.add('active-nav');
        }
    });
});


if(window.innerWidth < 980){

    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('open')
        mobileNav.classList.toggle('toggle-nav')
    })




    meriaExpandBtn.addEventListener('click',()=>{
        meriaExpandMenu.style.transform='translateX(-100%)';
        meriaExpandMenu.style.zIndex = 12
    
    })
    branchesExpandBtn.addEventListener('click',()=>{
        branchesExpandMenu.style.transform='translateX(-200%)';
        branchesExpandMenu.style.zIndex = 13
        
    })
    
    closeMeria.addEventListener('click',()=>{
        meriaExpandMenu.style.transform='translateX(0%)';
    
    })
    
    closeBranches.addEventListener('click',()=>{
        branchesExpandMenu.style.transform='translateX(-100%)';
    
    })
   









}

let nav = document.querySelector('.navigation')
let topbar = document.querySelector('.topbar')


window.addEventListener('scroll',()=>{

    if (window.pageYOffset > 0) {


        nav.style.position='fixed'
        nav.style.top='127px'
      
         nav.style.zIndex='100'
        topbar.style.position='sticky'
        topbar.style.top='0'
        topbar.style.zIndex='100'
    }
})



if(window.innerWidth <= 980){
    let parent = document.querySelector('.innerpage-main')
    let child = document.querySelector('.news-right-innerpages')
    let mobileParent = document.querySelector('.innerpage-main-bottom')

    parent.removeChild(child)
    mobileParent.appendChild(child)
    child.style.position="relative"
}




const hamburger = document.querySelector('#hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const meriaExpandBtn = document.querySelector('#meria-expand-btn')
const branchesExpandBtn = document.querySelector('#branches-expand-btn')
const meriaExpandMenu = document.querySelector('#meria-expand-menu')
const branchesExpandMenu = document.querySelector('#branches-expand-menu')
const closeMeria = document.querySelector('.meria-nav-prev')
const closeBranches = document.querySelector('.branches-nav-prev')





if(window.innerWidth < 980){

    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('open')
        mobileNav.classList.toggle('toggle-nav')
        // document.body.classList.toggle('scroll-lock');
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

    if (window.pageYOffset > 128) {


        nav.style.position='fixed'
        nav.style.top='0'
        nav.style.zIndex='127'
        nav.style.transition='250ms ease'
      
        
    }else{
        nav.style.position='relative'

    }
})





const lang2 = document.getElementById('lang')

lang2.addEventListener('click', function () {
    if (this.textContent === "eng") {
        this.textContent = "ქარ"
        return

    }
    this.textContent = "eng"


})

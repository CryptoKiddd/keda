


const container = document.getElementById('gallery')
const mainImage = document.getElementById('main-image')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log(container)

const images = [
    '../images/galleryImages/1.jpeg',
    '../images/galleryImages/2.jpeg',
    '../images/galleryImages/3.jpeg',
    '../images/galleryImages/4.png',
    '../images/galleryImages/1.jpeg',
    '../images/galleryImages/2.jpeg',
    '../images/galleryImages/3.jpeg',
    '../images/galleryImages/1.jpeg',
    '../images/galleryImages/2.jpeg',
    '../images/galleryImages/3.jpeg',
    '../images/galleryImages/1.jpeg',


]
mainImage.src=images[0]

next.addEventListener('click',()=>{
    images.push(images.shift())
    mainImage.src=images[0]

})
prev.addEventListener('click',()=>{
    images.unshift(images.pop())
    mainImage.src=images[0]

})
images.forEach((img,idx)=>{
    const item = document.createElement('div')
    if(idx % 2 === 0){
        item.classList.add('portrait')
    }
    if(idx % 9 === 0){
        item.classList.add('wide')
    }
    if(idx % 7 === 0){
        item.classList.add('portrait')
    }
 
    item.classList.add('gallery-image')
    const gridImage = document.createElement('img')

    gridImage.src=img
    gridImage.classList.add('gi')
    item.appendChild(gridImage)
    container.appendChild(item)
})
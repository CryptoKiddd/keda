const galleryContainer = document.querySelector(".text-g-images")
const mainImage = document.getElementById('main-image')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const textGalleryImages=[
'../images/galleryImages/4.png',
'../images/galleryImages/1.jpeg',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png',
'../images/galleryImages/4.png'
];

mainImage.src=textGalleryImages[0]

next.addEventListener('click',()=>{
    textGalleryImages.push(textGalleryImages.shift())
    mainImage.src=textGalleryImages[0]
    console.log('clcikde')

})
prev.addEventListener('click',()=>{
    textGalleryImages.unshift(textGalleryImages.pop())
    mainImage.src=textGalleryImages[0]

})

textGalleryImages.forEach((img)=>{
    const item = document.createElement('div')
    item.classList.add('gallery-img-item')

    const g_img = document.createElement('img')

    g_img.src=img
   
    item.appendChild(g_img)
    galleryContainer.appendChild(item)
})


document.addEventListener('DOMContentLoaded', function () {
    const elements = [];
    for (let i = 1; i <= 20; i++) {
        elements.push({
            imgSrc: `https://via.placeholder.com/500x219?text=Image+${i}`,
            thumbSrc: `https://via.placeholder.com/100x100?text=Thumb+${i}`,
        });
    }

    const galleryElementContainer = document.getElementById('gallery-element-container');
    const mainImage = document.getElementById('main-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentImageIndex = 0;

    function renderMainImage(index) {
        mainImage.src = elements[index].imgSrc;
    }

    function renderGallery() {
        galleryElementContainer.innerHTML = '';
        elements.forEach((elementData, index) => {
            const galleryElement = document.createElement('div');
            galleryElement.classList.add('gallery-element');
            galleryElement.innerHTML = `
                <img src="${elementData.thumbSrc}" alt="Thumbnail">
            `;
            galleryElement.addEventListener('click', () => {
                currentImageIndex = index;
                renderMainImage(currentImageIndex);
            });
            galleryElementContainer.appendChild(galleryElement);
        });
    }

    prevButton.addEventListener('click', function () {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            renderMainImage(currentImageIndex);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentImageIndex < elements.length - 1) {
            currentImageIndex++;
            renderMainImage(currentImageIndex);
        }
    });

    renderMainImage(currentImageIndex);
    renderGallery();
});


const introContainerImagePaths = [
    'images/introContainerImages/introContainerImage1.jpg',
    'images/introContainerImages/introContainerImage2.jpg',
    'images/introContainerImages/introContainerImage3.jpg',
];

var introContainerImageIndex = 0;

function updateBanner() {
    const banner = document.getElementById('intro-container-id');
    banner.style.backgroundImage = `url('${introContainerImagePaths[introContainerImageIndex]}')`;
}

function nextImage() {
    introContainerImageIndex = (introContainerImageIndex + 1) % introContainerImagePaths.length;
    updateBanner();
}

function prevImage() {
    introContainerImageIndex = (introContainerImageIndex - 1 + introContainerImagePaths.length) % introContainerImagePaths.length;
    updateBanner();
}

// Initialize first image
updateBanner();

// Looping through images every 5 seconds
setInterval(() => {
    nextImage();
}, 5000);
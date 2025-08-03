const introContainerImagePaths = [
    'images/introContainerImages/introContainerImage1.jpg',
    'images/introContainerImages/introContainerImage2.jpg',
    'images/introContainerImages/introContainerImage3.jpg',
];
const pfnfIntroImagePaths = [
    'images/pfnfs/pfnf1.jpg',
    'images/pfnfs/pfnf2.jpg',
    'images/pfnfs/pfnf3.jpg',
    'images/pfnfs/pfnf4.jpg',

];

var introContainerImageIndex = 0;
var pfnfIntroImageIndex = 0;

function updateBanner() {
    const banner = document.getElementById('intro-container-id');
    const pfnfIntro = document.getElementById('pfnf-intro-box-id');
    console.log(banner, pfnfIntro);
    banner.style.backgroundImage = `url('${introContainerImagePaths[introContainerImageIndex]}')`;
    pfnfIntro.style.backgroundImage = `url('${pfnfIntroImagePaths[pfnfIntroImageIndex]}')`;
}

function nextImage() {
    introContainerImageIndex = (introContainerImageIndex + 1) % introContainerImagePaths.length;
    pfnfIntroImageIndex = (pfnfIntroImageIndex + 1) % pfnfIntroImagePaths.length;
    updateBanner();
}

function prevImage() {
    introContainerImageIndex = (introContainerImageIndex - 1 + introContainerImagePaths.length) % introContainerImagePaths.length;
    pfnfIntroImageIndex = (pfnfIntroImageIndex - 1 + pfnfIntroImagePaths.length) % pfnfIntroImagePaths.length;
    updateBanner();
}

// Initialize first image
updateBanner();

// Looping through images every 5 seconds
setInterval(() => {
    nextImage();
}, 5000);
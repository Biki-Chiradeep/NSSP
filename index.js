fetch('navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-placeholder').innerHTML = data;
});
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
});

const introContainerImagePaths = [
    'images/introContainerImages/introContainerImage1.jpg',
    'images/introContainerImages/introContainerImage2.jpg',
];
const pfnfIntroImagePaths = [
    'images/pfnf/pfnf1.jpg',
    'images/pfnf/pfnf2.jpg',
    'images/pfnf/pfnf3.jpg',
    'images/pfnf/pfnf4.jpg',

];
const rjIntroImagePaths = [
    'images/rj/rj1.jpg',
    'images/rj/rj2.jpg',
    'images/rj/rj3.jpg',
    'images/rj/rj4.jpg',
    'images/rj/rj5.jpg',
    'images/rj/rj6.jpg',

];

var introContainerImageIndex = 0;
var pfnfIntroImageIndex = 0;
var rjIntroImageIndex = 0;

function updateBanner() {
    const banner = document.getElementById('intro-container-id');
    const pfnfIntro = document.getElementById('pfnf-intro-box-id');
    const rjIntro = document.getElementById('rj-intro-box-id');
    console.log(banner, pfnfIntro);
    banner.style.backgroundImage = `url('${introContainerImagePaths[introContainerImageIndex]}')`;
    pfnfIntro.style.backgroundImage = `url('${pfnfIntroImagePaths[pfnfIntroImageIndex]}')`;
    rjIntro.style.backgroundImage = `url('${rjIntroImagePaths[rjIntroImageIndex]}')`;
}

function nextImage() {
    introContainerImageIndex = (introContainerImageIndex + 1) % introContainerImagePaths.length;
    pfnfIntroImageIndex = (pfnfIntroImageIndex + 1) % pfnfIntroImagePaths.length;
    rjIntroImageIndex = (rjIntroImageIndex + 1) % rjIntroImagePaths.length;
    updateBanner();
}

function prevImage() {
    introContainerImageIndex = (introContainerImageIndex - 1 + introContainerImagePaths.length) % introContainerImagePaths.length;
    pfnfIntroImageIndex = (pfnfIntroImageIndex - 1 + pfnfIntroImagePaths.length) % pfnfIntroImagePaths.length;
    rjIntroImageIndex = (rjIntroImageIndex - 1 + rjIntroImagePaths.length) % rjIntroImagePaths.length;
    updateBanner();
}

// Initialize first image
updateBanner();

// Looping through images every 5 seconds
setInterval(() => {
    nextImage();
}, 4000);
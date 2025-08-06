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


const pfnfIntroImagePaths = [
    'images/pfnf/pfnf1.jpg',
    'images/pfnf/pfnf2.jpg',
    'images/pfnf/pfnf3.jpg',
    'images/pfnf/pfnf4.jpg',

];

var pfnfIntroImageIndex = 0;

function updateBanner() {
    const pfnfIntro = document.getElementById('pfnf-intro-container-id');

    console.log( pfnfIntro);
    pfnfIntro.style.backgroundImage = `url('${pfnfIntroImagePaths[pfnfIntroImageIndex]}')`;
}

function nextImage() {
    pfnfIntroImageIndex = (pfnfIntroImageIndex + 1) % pfnfIntroImagePaths.length;
    updateBanner();
}

function prevImage() {
    pfnfIntroImageIndex = (pfnfIntroImageIndex - 1 + pfnfIntroImagePaths.length) % pfnfIntroImagePaths.length;
    updateBanner();
}

// Initialize first image
updateBanner();

// Looping through images every 5 seconds
setInterval(() => {
    nextImage();
}, 4000);
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


const rjIntroImagePaths = [
    'images/rj/rj1.jpg',
    'images/rj/rj2.jpg',
    'images/rj/rj3.jpg',
    'images/rj/rj4.jpg',

];

var rjIntroImageIndex = 0;

function updateBanner() {
    const rjIntro = document.getElementById('rj-intro-container-id');

    console.log( rjIntro);
    rjIntro.style.backgroundImage = `url('${rjIntroImagePaths[rjIntroImageIndex]}')`;
}

function nextImage() {
    rjIntroImageIndex = (rjIntroImageIndex + 1) % rjIntroImagePaths.length;
    updateBanner();
}

function prevImage() {
    rjIntroImageIndex = (rjIntroImageIndex - 1 + rjIntroImagePaths.length) % rjIntroImagePaths.length;
    updateBanner();
}

// Initialize first image
updateBanner();

// Looping through images every 5 seconds
setInterval(() => {
    nextImage();
}, 4000);
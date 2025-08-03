const carousel = document.getElementById("carousel");
const items = document.querySelectorAll("#carousel .item-slide-out");
const radioButtons = document.querySelectorAll('input[name="position"]');
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
console.log("the next button",nextBtn);
console.log("the previous button",prevBtn);

const totalItems = items.length;

// Find initially checked radio button
let currentIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
if (currentIndex === -1) currentIndex = 0; // Default to first item if none checked



function updateCarousel() {
    carousel.style.setProperty("--position", currentIndex + 1);
}

// Next button event
nextBtn.addEventListener("click", () => {
    console.log("next button clicked");
    currentIndex = (currentIndex + 1) % totalItems;
    radioButtons[currentIndex].checked = true;
    updateCarousel();
});

// Previous button event
prevBtn.addEventListener("click", () => {
    console.log("previous button clicked");
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    radioButtons[currentIndex].checked = true;
    updateCarousel();
});

// Add event listener to each radio button
radioButtons.forEach((radio, i) => {
    radio.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
    });
});

// Initial setup
updateCarousel();

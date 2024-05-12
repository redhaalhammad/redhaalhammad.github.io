// Slideshow functions 

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const carouselWrapper = document.getElementById('carousel-wrapper');
const itemWidth = document.querySelector('.carousel-item').offsetWidth;
const intervalTime = 3000; // Set the interval time in milliseconds (e.g., 3000 for 3 seconds)

function updateCarousel() {
  carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to the first image if at the end
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Go to the last image if at the beginning
  }
  updateCarousel();
}

// Automatically advance the carousel
function autoAdvance() {
  setInterval(() => {
    nextSlide();
  }, intervalTime);
}

// Start auto-advancing when the page loads
autoAdvance();

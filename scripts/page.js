// navigation scroll

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });

  /* Image Carousel */

  document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
  
    let currentIndex = 0;
    let images = [];
  
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        images = data.images;
        updateCarousel();
      });
  
    function updateCarousel() {
      carouselInner.innerHTML = images
        .map((src, index) => `<img src="${src}" class="${index === currentIndex ? 'active' : ''}">`)
        .join("");
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  });

// hamburger menu

const handButton = document.querySelector('#menu');
const heading = document.querySelector('.heading');

handButton.addEventListener('click', () => {
    heading.classList.toggle('open');
    handButton.classList.toggle('open');
});
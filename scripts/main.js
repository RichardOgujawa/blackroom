window.addEventListener("load", ()=>{
  const slideContainer = document.querySelector('.exhibition_carousel_container');
  const slide = document.querySelector('.slides');
  const nextBtn = document.querySelector('.next_btn');
  const prevBtn = document.querySelector('.prev_btn');
  const interval = 3000;

  
  let slides = document.querySelectorAll('.slide');
  let index = 1;
  let slideId;
  
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  
  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';
  
  slide.append(firstClone);
  slide.prepend(lastClone);
  
  let slideWidth = slides[index].clientWidth;

  window.addEventListener("resize", ()=> {
    let slideWidth = slides[index].clientWidth;
    console.log(slideWidth);
  })


slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);


const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

})
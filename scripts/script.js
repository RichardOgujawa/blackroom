//Change search placeholder randomly
const artistsArr = ['Yasushi Muraki', 'Kamila Kozłowska', 'Toshinori Mori']

i = Math.floor(Math.random() * 3);

var searchPlaceholder = document.getElementsByName('Search')[0].placeholder = artistsArr[i];

//Make Nav Links light up on navigation
//Slideshow
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const exhibitionCarouselCont = document.querySelector('.exhibition_carousel_container');

const carouselImg = document.querySelector('.carousel_img');

var j = 1;
var k = 1;

// moveX = carouselImgWidth;


console.log(`%c Coding Project #2:`, `font-weight: 700; background-color: #eee;`, 
`

Hi 👋🏾 thanks for checking out this project. 

Coding this was a great learning opportunity, I believe, because it quickly brought me down from the high I was on after completing the last project (the Genius.com one) which seemed to go a lot smoother than expected 😅 and reminded of me of how much I still had to learn about JavaScript. 

However, it was also good in that it helped me re-inforce a lot of the new things I've learned about HTML and CSS thus far.`);

//Change search placeholder randomly
const artistsArr = ['Yasushi Muraki', 'Kamila Kozłowska', 'Toshinori Mori']

i = Math.floor(Math.random() * 3);

var searchPlaceholder = document.getElementsByName('Search')[0].placeholder = artistsArr[i];

//Open and Close Navigation Menu
const nav = document.querySelector('.mobile_nav_link_container');
const navToggle = document.querySelector('.mobile_toggle_icon');
const navClose = document.querySelector('.nav_close_btn');

navToggle.addEventListener('click', ()=> {
    nav.setAttribute('data-visible', true);  
})

navClose.addEventListener('click', ()=> {
    nav.setAttribute('data-visible', false);  
})

//Have Search Popup Fade in and Out
const searchBox= document.querySelector('.search_alert');
const searchIcon = document.querySelector('.search_container');
const searchClose = document.querySelector('.search_close_btn');

searchIcon.addEventListener('click', ()=> {
    searchBox.setAttribute('search-data-visible', true);  
})

searchClose.addEventListener('click', ()=> {
    searchBox.setAttribute('search-data-visible', false);  
})
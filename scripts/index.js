// Navigation 
// Reference 
const bugerMenu = document.querySelector('.js-menu');
const navbar = document.querySelector('#navbar');
const handMenuDiv = document.querySelectorAll('.js-div');
const checkInput = document.querySelector('#menyAvPaa')
bugerMenu.addEventListener('click', () => {
  if(checkInput.checked == false){
    navbar.classList.add('show-menu');
    // console.log('checked')
  }else{
    navbar.style.animation = 'slideOut 0.5s ease-in-out ';
    navbar.classList.remove('show-menu');
    // console.log('unchecked')
  }
});

// contact button code 
const contactBtn = document.querySelector('.js-contact-btn');
contactBtn.addEventListener('click', () => {
  window.location.href = 'contact.html';
});

// for navigation show off from bottom to top 
// document.querySelector('.js-handburger').addEventListener('click', () => {
//   console.log('hey....')
//   // if (navbar.style.animationName === 'slideIn') {
//   //   // navbar.style.animationName = 'slideOut';
//   //   console.log('hi...');
//   // } else {
//   //   // navbar.style.animationName = 'slideIn';
//   // }
// })



// const theContent = document.querySelector('.js-content');
// const theAboutContent = document.querySelector('.js-about-content');
// const header = document.querySelector('.header')
// const aboutHeader = document.querySelector('.js-about-header')
// theContent.classList.add('show-hero');
// theAboutContent.classList.add('show-about-hero');
// header.classList.add('show-hero');
// aboutHeader.classList.add('show-about-hero');



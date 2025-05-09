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
})
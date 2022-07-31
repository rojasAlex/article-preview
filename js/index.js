const btn = document.querySelector('.btn-share');
const navSocial = document.querySelector('.r-social');


const menuToggle = ()=>{
   navSocial.classList.toggle('active');

}

btn.addEventListener('click', menuToggle);


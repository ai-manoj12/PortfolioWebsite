const dropDown = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu'); //name of class

// for the mobile menu, create a function adding an active class to trigger
// active things in the css file

const mobileMenu = () => {
    dropDown.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

//event listener
dropDown.addEventListener('click', mobileMenu); //calling the method



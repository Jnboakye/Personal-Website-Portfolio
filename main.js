const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});
/* 
const typed = new Typed('.multiple', {
    Strings: ['Front-End Developer', 'Freelancer', 'Entreprenuer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
*/

var typed = new Typed('.multiple', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: ['Front-End Developer', 'Freelancer', 'Entrepreneur',],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});






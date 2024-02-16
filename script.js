// navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); a

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
};


// toggle icon navbar (responsive)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



// scroll animation
ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 1700,
    delay: 100 
});

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .coming', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .secondary', { origin: 'left' });
ScrollReveal().reveal('.about-content p', { origin: 'right' });
ScrollReveal().reveal('.primary, .terciary', { origin: 'right' });


// typedJS
const typed = new Typed('.multiple-text',{
    strings: ['QA analyst','API-Postman','Metodología ágiles','Mobile'],
    typedSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});
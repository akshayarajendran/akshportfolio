// Menu icon toggle
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
    let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};


const scriptURL = 'https://script.google.com/macros/s/AKfycbwYKXAfrgLcSIMEZljqeMibqdcbF3V_WUHazEQV-ePvcjdtbVsnVrGNixRtjQuAHJ0Ptg/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      console.log('Thank you, your form is submitted successfully', response);
      alert('Thank you, your form is submitted successfully');
    } else {
      return response.json().then(error => {
        console.error('Error!', error);
        alert('There was an error submitting the form');
      });
    }
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert('There was an error submitting the form');
  });
});


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p', { origin: 'right' });

// Typed.js animations
const typed = new Typed('.multiple-text', {
    strings: ['Android App Developer', 'Frontend Developer','Website Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    loop:true, 
});

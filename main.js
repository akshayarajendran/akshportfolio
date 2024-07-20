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

emailjs.init("5qloB4MxsoWj2jQae"); // Replace with your EmailJS User ID

// Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_f0d1w8d', 'template_kvu7hfv', this) 
      .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById("contactForm").reset(); // Reset the form after successful submission
      }, function(error) {
        alert('Failed to send message. Please try again.');
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
document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.multiple-texts', {
        strings: ['Android App Developer', 'Frontend Developer', 'Website Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });
});

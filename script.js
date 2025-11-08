// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
        darkModeToggle.style.background = 'rgba(255,255,255,0.9)';
        darkModeToggle.style.color = '#333';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
        darkModeToggle.style.background = 'rgba(255,255,255,0.2)';
        darkModeToggle.style.color = 'white';
    }
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been received. 😺\nWe'll respond to: ${email}`);
    
    // Reset the form
    contactForm.reset();
});

// Add image click functionality for fun
const images = document.querySelectorAll('.image-grid img');

images.forEach((image, index) => {
    image.addEventListener('click', function() {
        alert(`Meow! Cat #${index + 1} says hello! 🐾`);
    });
});

console.log('Cat Photo App is now fully functional! 🐱');
// Toggle mobile menu
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Scroll animation for project cards
const cards = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// Contact form validation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
      formMessage.textContent = 'Message sent successfully!';
      formMessage.style.color = 'green';
      form.reset();
    } else {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
    }
  });
}
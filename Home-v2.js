const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function updateTestimonials(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonials(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonials(currentIndex);
});

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonials(currentIndex);
}, 5000);
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address.';
        emailError.style.display = 'block';
        isValid = false;
    } 
    else {
        emailError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (message === '') {
        messageError.textContent = 'Message cannot be empty.';
        messageError.style.display = 'block';
        isValid = false;
    } 
    else {
        messageError.style.display = 'none';
    }
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});
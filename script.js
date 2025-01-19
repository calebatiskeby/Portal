  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}


  function validateForm() {
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const course = document.getElementById('course').value;
    const level = document.getElementById('level').value;
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    // Regular expressions for validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Clear previous messages
    statusMessage.textContent = "";
    statusMessage.style.color = "red";
    
    // Form validation
    if (name === "") {
        statusMessage.textContent = "Please enter your full name.";
        return false;
    }
    if (!email.match(emailPattern)) {
        statusMessage.textContent = "Please enter a valid email address.";
        return false;
    }
    if (!phone.match(phonePattern)) {
        statusMessage.textContent = "Please enter a valid 11-digit phone number.";
        return false;
    }
    if (course === "") {
        statusMessage.textContent = "Please select a course.";
        return false;
    }
    if (level === "") {
        statusMessage.textContent = "Please select your education level.";
        return false;
    }
    if (message.length < 10) {
        statusMessage.textContent = "Please provide more information (at least 10 characters).";
        return false;
    }

    // If all validations pass
    statusMessage.textContent = "Form submitted successfully!";
    statusMessage.style.color = "blue";
    return true;
}

function validateForm() {
    // Get form elements
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subjects = document.getElementById('subjects').value.trim();
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    // Regular expressions for validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Clear previous messages
    statusMessage.textContent = "";
    statusMessage.style.color = "red";

    // Form validation
    if (fullName === "") {
        statusMessage.textContent = "Please enter your full name.";
        return false;
    }
    if (!email.match(emailPattern)) {
        statusMessage.textContent = "Please enter a valid email address.";
        return false;
    }
    // if (!phone.match(phonePattern)) {
    //     statusMessage.textContent = "Please enter a valid 11-digit phone number.";
    //     return false;
    // }
    if (subjects === "") {
        statusMessage.textContent = "Please specify the subjects you can teach.";
        return false;
    }
    if (education === "") {
        statusMessage.textContent = "Please select your highest educational qualification.";
        return false;
    }
    if (experience === "" || isNaN(experience) || parseInt(experience) < 0) {
        statusMessage.textContent = "Please enter a valid number for years of experience.";
        return false;
    }
    if (message.length < 10) {
        statusMessage.textContent = "Please provide more information (at least 10 characters).";
        return false;
    }

    // If all validations pass
    statusMessage.textContent = "Application submitted successfully!";
    statusMessage.style.color = "green";
    return true;
}
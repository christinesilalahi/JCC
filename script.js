const menuToggle = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

function validateForm(event) {
    event.preventDefault();
 
    nameInput = document.querySelector('input[type="text"][placeholder="Enter your name*"]');
    emailInput = document.querySelector('input[type="text"][placeholder="Enter your email*"]');
    phoneInput = document.querySelector('input[type="text"][placeholder="Enter your phone number*"]');
    messageInput = document.querySelector('textarea[placeholder="Message*"]');
    phoneCheckbox = document.querySelectorAll('input[type="checkbox"]')[0];
    emailCheckbox = document.querySelectorAll('input[type="checkbox"]')[1];

    if (nameInput.value === '') {
        alert('Please enter your name');
        return;
      }

    if (nameInput.value.length < 5) {
      alert('Name must be at least 5 characters');
      return;
    }

    if (emailInput.value === '') {
      alert('Please enter your email');
      return;
    }
  
    if (!emailInput.value.endsWith('@gmail.com')) {
      alert('Email should end with @gmail.com');
      return;
    }

    if (phoneInput.value === '') {
      alert('Please enter your phone number');
      return;
    }
  
    if (!phoneInput.value.startsWith('+62')) {
      alert('Phone number should start with +62');
      return;
    }
  
    if (messageInput.value === '') {
        alert('Please enter your message');
        return;
      }

    if (messageInput.value.length < 10) {
      alert('Message must be at least 10 characters');
      return;
    }

    if (!phoneCheckbox.checked && !emailCheckbox.checked) {
      alert('Please select a preferred contact method');
      return;
    }

    alert('Form submitted successfully!');
    document.getElementById('regisForm').submit();
  }
  
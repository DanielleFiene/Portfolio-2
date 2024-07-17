// Click submit change inner HTML
// Select the form and button elements
const form = document.getElementById('myForm');
const button = document.getElementById('submit');

// Add event listener to the button
button.addEventListener('click', function() {
    // Check if all required fields are filled out
    if (form.checkValidity()) {
        // Change the innerHTML of the button
        button.innerHTML = 'Your message has been sent!';
    } else {
        // If not all fields are filled out, display an error or handle accordingly
        alert('Please fill out all required fields.');
    }
});
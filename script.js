document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the email and message from the form
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Combine the email and message into one string
    const combinedMessage = `Email: ${email}%0AMessage: ${message}`;

    // WhatsApp API URL with the combined message
    const whatsappUrl = `https://wa.me/254700143167?text=${combinedMessage}`;

    // Redirect to WhatsApp with the message
    window.open(whatsappUrl, '_blank');
});
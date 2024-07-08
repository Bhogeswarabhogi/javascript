document.getElementById('myForm').addEventListener('submit', function(event) {
    let errorMessages = [];
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '') {
        errorMessages.push('Name is required');
    }
    
    if (email === '') {
        errorMessages.push('Email is required');
    }
    
    if (message === '') {
        errorMessages.push('Message is required');
    }
    
    if (errorMessages.length > 0) {
        event.preventDefault();
        document.getElementById('errorMessages').innerText = errorMessages.join(', ');
    }
});

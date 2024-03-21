function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
        alert('Name cannot be empty.');
        return false;
    }

    if (!email.match(emailRegex)) {
        alert('Invalid email format.');
        return false;
    }

    if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Registration Successful!!');

    // You can change this to the page you want to redirect to
    window.location.href = 'welcome.html';

    return true;
}

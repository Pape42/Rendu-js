const form = document.querySelector('#registrationForm');
const darkmode = document.querySelector('#darkmode');

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const pseudo = document.querySelector('#pseudo');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');

    let isValid = true;

    if (pseudo.value.length < 6) {
        showError(pseudo);
        isValid = false;
    } else {
        showSuccess(pseudo);
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        showError(email);
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (password.value.length < 8) {
        showError(password);
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (password.value !== password2.value) {
        showError(password2);
        isValid = false;
    } else {
        showSuccess(password2);
    }

    if (isValid) {
        alert('Inscription réussie !');
    }
});

function showError(input) {
    input.classList.remove('valid');
    input.classList.add('invalid');
}

function showSuccess(input) {
    input.classList.remove('invalid');
    input.classList.add('valid');
}


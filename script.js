const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput();
});

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const isValidEmail = email => {
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/;
    return valid.test(String(email).toLowerCase());
}

const validateInput = () => {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (nameValue === "") {
        setError(username, "Name is required");
    }
    else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Email is required");
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
    else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
    }
    else if(passwordValue.length <8){
        setError(password,"Password must be at least 8 character.");
    }
    else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, "Conform password is required");
    }
    else if(password2Value!==passwordValue){
        setError(password2,"Password doesn't match.")
    }
    else {
        setSuccess(password2);
    }
};
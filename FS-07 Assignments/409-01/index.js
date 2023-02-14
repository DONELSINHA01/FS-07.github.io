const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const telephone = document.getElementById('telephone');
const yourBio = document.getElementById('yourBio');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const telephoneValue = telephone.value.trim();
    const yourBioValue = yourBio.value.trim();
    
    
    if(firstNameValue === '') {
        setError(firstName, 'First Name is required');
    } 
    else if (firstNameValue.length > 16 || firstNameValue.length<3) {
        setError(firstName, 'First name must be alphanumeric and contain 3 - 16 characters.')
    }
    else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last Name is required');
    } 
    else if (lastNameValue.length > 17 || firstNameValue.length<3 ) {
        setError(lastName, 'Last name must be alphanumeric and contain 3 - 16 characters.')
    }
    else {
        setSuccess(lastName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email must be a valid address, e.g. example@example.com');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    

    if(telephoneValue === '') {
        setError(telephone, 'Telephone is required');
    }
    else if (telephoneValue.length < 10 || telephoneValue.length> 10 ) {
        setError(telephone, 'A valid Telephone number(10 digits and 333-333-3333)')
    } 
    
    else {
        setSuccess(telephone);
    }

    if(yourBioValue === '') {
        setError(yourBio, 'Bio is required');
    } 
    else if (yourBioValue.length < 8 ) {
        setError(yourBio, 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters.')
    } 
    else {
        setSuccess(yourBio);
    }


};

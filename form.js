const form = document.getElementById('form');
const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const email = document.getElementById('email');
const age = document.getElementById('age');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const fnameValue = fname.value.trim();
    const snameValue = sname.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();


    if (fnameValue === '') {
        setErrorFor(fname, 'First name cannot be blank');
    }
    else {
        setSuccessFor(fname);
    }
    if (snameValue === '') {
        setErrorFor(sname, 'Second name cannot be blank');
    }
    else {
        setSuccessFor(sname);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
    if (ageValue === '') {
        setErrorFor(age, 'Age cannot be blank');
    } else if (ageValue < 0) {
        setErrorFor(age, 'Age cannot be negative');
    } else {
        setSuccessFor(age);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('password2');

// Show input error message ( best practice, write the functions above the event listeners)
function showError(input, message) {
    const formControl = input.parentElement; //define the variable formcontrol as the input parentelement
    formControl.className = 'form-control error'; //define the class the css code to attach to the error
    const small = formControl.querySelector('small') // define the small error variable in order to query the 'small' 
    small.innerText = message; // equate the queried small element to the respective error message
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement; //define the variable formcontrol as the input parentelement
    formControl.className = 'form-control success'; //define the class the css code to attach to the 
}

//check email is valid (code gotten from stack overflow)
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// get field name function
function getFieldName(input) {
    //return input.id.toUpperCase(); this returns the entire output as upper case
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); // select the firstletter of the input id convert to upper case, the concatinate with the rest of the input id by clicing from the second character with the index 1 
}


function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
       if(input.value.trim() === '') {
           //showError(input, `${input.id} is required`);
           showError(input, `${getFieldName(input)} is required`);
       } else {
           showSuccess(input);
       }
    });

}


// New event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email, password, password2]);
});


/* Event listeners with if statements
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'email is required');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'email is not valid');
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'password2 is required');
    } else {
        showSuccess(password2);
    }
});\
*/
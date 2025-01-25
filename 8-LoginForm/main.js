const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const showPasswordIcon = document.querySelector('i.fa-eye');

showPasswordIcon.addEventListener('click', function() {
  if (loginPassword.type === 'password') {
    loginPassword.type = 'text';
    showPasswordIcon.style.color = 'red';
  } else {
    loginPassword.type = 'password';
    showPasswordIcon.style.color = '#ddd';
  }
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;
  if (username === "" || username.length < 3) {
    showError(loginUsername, 'That username is a losername');
  } else {
    showSuccess(loginUsername, 'It\'s an older code, sir, but it checks out');
  }
  if (password === "" || password.length < 6) {
    showError(loginPassword, 'That password is an assword');
  } else {
    showSuccess(loginPassword, 'You\'re cleared for entry');
  }
});

function showError(input, message) {
  const formField = input.parentElement;
  formField.className = 'form-field error';
  if((formField.className === "form-field error")){
    const alert_message = formField.querySelector('.alert-message');
    alert_message.style.visibility = 'visible';
    alert_message.color = 'red';
    alert_message.innerHTML = message;
  }
}

function showSuccess(input, message) {
  const formField = input.parentElement;
  formField.className = 'form-field success';
  if((formField.className === "form-field success")){
    const alert_message = formField.querySelector('.alert-message');
    alert_message.style.visibility = 'visible';
    alert_message.color = 'green';
    alert_message.innerHTML = message;
  }
}

const requestForm = document.querySelector('.form-request');

requestForm.style.display = 'none';

const showRequestForm = document.querySelector('.reset-password');

showRequestForm.addEventListener('click', function(e) {
  e.preventDefault();
  if(requestForm.style.display !== 'block'){
    loginContainer.style.minHeight = '600px';
    requestForm.style.display = 'block';
  } else {
    requestForm.style.display = 'none';
    loginContainer.style.minHeight = 'initial';
  }
});

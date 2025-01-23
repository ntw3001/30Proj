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
    showError('That username is a losername');
  } else {
    showSuccess('You logged in, can\'t believe it');
  }
  if (password === "" || password.length < 6) {
    showError('That password is an assword');
  } else {
    showSuccess('You logged in, can\'t believe it');
  }
});

function showError(input, message) {
  const formField = input.parentElement;
}

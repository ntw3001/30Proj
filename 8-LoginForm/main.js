const showPassword = document.querySelector('i.fa-eye');
const loginPassword = document.getElementById('loginPassword');

showPassword.addEventListener('click', function() {
  if (loginPassword.type === 'password') {
    loginPassword.type = 'text';
  } else {
    loginPassword.type = 'password';
  }
});

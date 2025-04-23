const fullName = document.getElementById("FullName");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const password = document.getElementById("Password");
const ZIP = document.getElementById("ZIP");

fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
ZIP.addEventListener("blur", validateZIP);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);

function notValid(input) {
  input.classList.add("notValid");
  input.classList.remove("valid");
}

function valid(input) {
  input.classList.remove("notValid");
  input.classList.add("valid");
}

function validateFullName() {
  const fullNameRegex = /^[A-Za-z]{2,50}( )[A-Za-z]{2,50}(( )[A-Za-z]{2,50})?$/;
  if (!fullNameRegex.test(fullName.value)) {
    notValid(fullName);
    console.log("Full Name is not valid");
  } else {
    valid(fullName);
    console.log("Full Name is valid");
  }
}

function validatePhone () {
  const phoneRegex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!phoneRegex.test(phone.value)) {
    notValid(phone);
    console.log("Phone number is not valid");
  } else {
    valid(phone);
    console.log("Phone number is valid");
  }
}

function validateZIP() {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  if (!zipRegex.test(ZIP.value)) {
    notValid(ZIP);
    console.log("ZIP code is not valid");
  } else {
    valid(ZIP);
    console.log("ZIP code is valid");
  }
}

const fullName = document.getElementById("FullName");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const password = document.getElementById("Password");
const postcode = document.getElementById("Postcode");
const form = document.querySelector("form");

fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
postcode.addEventListener("blur", validatePostcode);
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
    document.getElementById("nameError").innerHTML = "Full Name must have 2-3 words, each with at least 2 characters";
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
    document.getElementById("phoneError").innerHTML = "Phone number must be in the format 123 456 7890";
  } else {
    valid(phone);
    console.log("Phone number is valid");
  }
}

function validatePostcode() {
  const postcodeRegex = /^(GIR 0AA|[A-PR-UWYZ][A-HK-Y]?[0-9][0-9ABEHMNPRVWXY]?[ ]?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
  ;
  if (!postcodeRegex.test(postcode.value)) {
    notValid(postcode);
    console.log("Postcode is not valid");
    document.getElementById("postcodeError").innerHTML = "Postcode must be in a valid format";
  } else {
    valid(postcode);
    console.log("Postcode is valid");
  }
}

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    notValid(email);
    console.log("Email is not valid");
    document.getElementById("emailError").innerHTML = "Email must be in a valid format";
  } else {
    valid(email);
    console.log("Email is valid");
  }
}

function validatePassword() {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    notValid(password);
    console.log("Password is not valid");
    document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long and contain at least one letter and one number";
  } else {
    valid(password);
    console.log("Password is valid");
  }
}

form.addEventListener("submit", (e) => {
  console.log("Form submitted");
  e.preventDefault();

  validateForm();
});

function validateForm() {
  const inputs = document.querySelectorAll("input");
  console.log (inputs);
  if(fullName.classList.contains("valid") &&
  email.classList.contains("valid") &&
  phone.classList.contains("valid") &&
  password.classList.contains("valid") &&
  postcode.classList.contains("valid")) {
    console.log("Form is valid");
  }
  else {
    console.log("Form is not valid");
    alert("Terrible job, try again");
    inputs.forEach((input) => {
      if (input.classList.contains("notValid")) {
        input.focus();
        return;
      }
    });
  }
};

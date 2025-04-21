const fullName = document.getElementById("FullName");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const password = document.getElementById("Password");
const ZIP = document.getElementById("ZIP");

fullName.addEventListener("blur", validateFullName);

function validateFullName() {
  const fullNameRegex = /^[A-Za-z]{2,50}( )[A-Za-z]{2,50}$/;
  if (!fullNameRegex.test(fullName.value)) {
    fullName.classList.add("notvalid");
    console.log("Full Name is not valid");
  } else {
    console.log("Full Name is valid");
  }
}

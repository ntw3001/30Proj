const form = document.createElement('form');
form.id = 'myForm';
form.style.width = '360px';

function createLabel(text){
  const label = `<label>${text}</label>`
  return label;
}

function createInput(type, id, placeholder){
  const input = `<input type="${type}" id="${id}" placeholder="${placeholder}"/>`
  return input;
}

form.innerHTML = `
  <h2>Add User</h2>
  <div>
    ${createLabel('First Name:')}
    ${createInput('text', 'firstName', 'Enter your first name')}
  </div>
  <div>
    ${createLabel('Last Name:')}
    ${createInput('text', 'lastName', 'Enter your last name')}
  </div>
  <div>
    ${createLabel('Birthdate:')}
    ${createInput('date', 'birthdate', null)}
  </div>
  <div>
    ${createLabel('Email:')}
    ${createInput('email', 'email', 'Enter your email')}
  </div>
  <div>
    ${createLabel('Password:')}
    ${createInput('password', 'password', 'Enter your password')}
  </div>
  <button class="btn" type="submit">Submit</button>
  `
document.body.appendChild(form);

const divContainer = document.querySelector("form")
  .querySelectorAll("div");
divContainer.forEach (function(div) {
  div.className = "input-container";
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.body.style.display = "grid";
  document.body.style.gridTemplateColumns = "1fr 1fr";

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthdate = document.getElementById('birthdate').value;
  const email = document.getElementById('email').value;

  function validateUser() {
    if (firstName === '' || lastName === '' || birthdate === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    } else {
      createUser();
      const inputs = document.querySelectorAll('input');
      inputs.forEach(function(inputField) {
        inputField.value = '';
      });
    }
  }

  function getFullName() {
    return `${firstName} ${lastName}`;
  }

  validateUser();

  function createUser() {
    const ul = document.createElement('ul');
    ul.id = "userDetails";
    ul.style.listStyleType = "none";

    ul.innerHTML = `
      <h4>${getFullName()}</h4>
      <img  style="height: 150px; border-radius: 25px;" src="http://placebeard.it/g/640/480" alt="User Image" />
      <li>Birthdate: <span>${birthdate}</span></li>
      <li>Email: <span>${email}</span></li>
    `;

    document.body.appendChild(ul);
  }
});

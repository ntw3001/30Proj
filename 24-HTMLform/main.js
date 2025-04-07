const container = document.createElement('div');
container.id = 'container';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '100%';

const form = document.createElement('form');
form.id = 'myForm';
form.style.flex = "0 0 360px";4
form.style.marginRight = "20px";

const userList = document.createElement('div');
userList.id = "userList";
userList.style.display = "grid";
userList.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
userList.style.gap = "20px";
userList.style.flex = "1";
userList.style.minWidth = "300px";
userList.style.maxWidth = "100%";

document.body.appendChild(container);
container.appendChild(form);
container.appendChild(userList);

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

const divContainer = document.querySelector("form")
  .querySelectorAll("div");
divContainer.forEach (function(div) {
  div.className = "input-container";
});

form.addEventListener('submit', function(event) {
  event.preventDefault();


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

  function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const age = calculateAge(birthdate);

  validateUser();

  function createUser() {
    const details = document.createElement('div');
    details.id = "userDetails";
    details.style.listStyleType = "none";
    details.style.display = "flex";
    details.style.flexDirection = "column";
    details.classList.add("animate-in");

    details.innerHTML = `
      <h4>${getFullName()}</h4>
      <img  style="height: 150px; width: 200px; border-radius: 25px;" src="http://placebeard.it/g/640/480" alt="User Image" />
      <span class="category">Birthdate: <span class="value">${birthdate}</span></span>
      <span class="category">Age: <span class="value">${age}</span></span>
      <span class="category">Power Level: <span class="value">${Math.floor(Math.random() * 10)}</span></span>
      <span class="category">Intellect: <span class="value">${Math.floor(Math.random() * 10)}</span></span>
      <span class="category">Charisma: <span class="value">${Math.floor(Math.random() * 10)}</span></span>
      <span class="category">Email: <span class="value">${email}</span></span>
    `;

    userList.appendChild(details);
  }
});

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

const divContainer = document.queryselector("form")
  .querySelectorAll("div");
divContainer.forEach (function(div) {
  div.className = "input-container";
});

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
  `
document.body.appendChild(form);

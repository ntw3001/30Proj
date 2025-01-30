const bill = document.getElementById('Bill');
const numberOfPeople = document.getElementById('Peopleamount');
const result = document.getElementById('result');
let servicequal = document.getElementById('Quality');

// console.log (bill, numberOfPeople, result);

result.style.display = 'none';

const calculator = document.getElementById('Calculator');

calculator.addEventListener('submit', calculateTip);

function calculateTip(e) {
  e.preventDefault();
  let billValue = parseFloat(bill.value);
  let numberOfPeopleValue = parseFloat(numberOfPeople.value);
  let servicequalValue = parseFloat(servicequal.value);

  if (billValue === '' || servicequalValue == 0) {
      alert('Please enter values');
      return;
  }

  let totalTip = parseFloat((billValue * servicequalValue).toFixed(2));
  let billWithTip = parseFloat((billValue * (1 + servicequalValue)).toFixed(2));
  let dividedTip = parseFloat((totalTip / numberOfPeopleValue).toFixed(2));
  let dividedBillWithTip = parseFloat((billWithTip / numberOfPeopleValue).toFixed(2));

  document.getElementById('Div_Tip').style.display = numberOfPeopleValue > 1 ? 'block' : 'none';
  document.getElementById('Div_Tip_Person').style.display = numberOfPeopleValue > 1 ? 'block' : 'none';

  result.style.display = 'block';
  document.getElementById('Tip').innerHTML = totalTip.toFixed(2);
  document.getElementById('Total_Tip').innerHTML = billWithTip.toFixed(2);
  document.getElementById('Div_Tip').innerHTML = dividedTip.toFixed(2);
  document.getElementById('Div_Tip_Person').innerHTML = dividedBillWithTip.toFixed(2);
}

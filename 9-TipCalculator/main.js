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
  let billValue = bill.value;
  let numberOfPeopleValue = numberOfPeople.value;
  let servicequalValue = servicequal.value;

  if (billValue === '' || servicequalValue == 0) {
      alert('Please enter values');
      return;
  }

  let totalTip = (billValue * servicequalValue);
  let billWithTip = billValue * (1 + servicequalValue);
  let dividedTip = totalTip / numberOfPeopleValue;
  let dividedBillWithTip = billWithTip / numberOfPeopleValue;

  document.getElementById('Div_Tip').style.display = numberOfPeopleValue > 1 ? 'block' : 'none';
  document.getElementById('Div_Tip_Person').style.display = numberOfPeopleValue > 1 ? 'block' : 'none';

  dividedTip = Math.round(dividedTip * 100) / 100;
  dividedTip = dividedTip.toFixed(2);

  dividedBillWithTip = Math.round(dividedBillWithTip * 100) / 100;
  dividedBillWithTip = dividedBillWithTip.toFixed(2);

  result.style.display = 'block';
  console.log(totalTip);
  console.log(billWithTip);
  console.log(dividedTip);
  console.log(dividedBillWithTip);
  document.getElementById('Tip').innerHTML = totalTip.toFixed(2);
  document.getElementById('Total_Tip').innerHTML = billWithTip.toFixed(2)
  document.getElementById('Div_Tip').innerHTML = dividedTip;
  document.getElementById('Div_Tip_Person').innerHTML = dividedBillWithTip;
}

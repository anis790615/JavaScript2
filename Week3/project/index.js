// Your code goes in here
function calculateBill(e) {
  const bill = parseInt(document.querySelector('#bill-amount').value, 10);
  const persons = parseInt(document.querySelector('#persons').value, 10);
  const service = parseFloat(document.querySelector('#service-rate').value);
  let outputString = `<h3>Your Tip</h3>
        <p>€${bill * service}</p>
        <h3>Your Bill</h3>
        <p>€${bill * service + bill}</p>`;
  if (persons > 1) {
    outputString += `<p>You pay €${Math.ceil((bill * service + bill) / persons)} each</p>`;
  }
  document.querySelector('#tip-amount').innerHTML = outputString;

  e.preventDefault();
}

document.querySelector('.calculator-form').addEventListener('submit', calculateBill);

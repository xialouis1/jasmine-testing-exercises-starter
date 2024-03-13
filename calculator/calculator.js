window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.querySelector('#loan-amount');
  loanAmount.value = '550000';

  let loanYears = document.querySelector('#loan-years');
  loanYears.value = '30';

  let loanRate = document.querySelector('#loan-rate');
  loanRate.value = '7.25';
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = Number(values.amount);
  let i = Number(values.rate / 12);
  let n = Number(values.years * 12);

  let monthlyPayment = (P * i) / (1 - Math.pow((1 + i), -n));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerHTML = `$${monthly}`;
}

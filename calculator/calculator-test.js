
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 100,
    rate: 12,
    years: 1
  }

  let monthlyPayment = calculateMonthlyPayment(values);

  expect(monthlyPayment).toEqual('100.02');
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 100,
    rate: 12,
    years: 1
  }

  let monthlyPayment = calculateMonthlyPayment(values);

  let decimal = monthlyPayment.split('.')[1];

  expect(decimal).toEqual('02');
});


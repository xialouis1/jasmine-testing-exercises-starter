describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput = document.getElementById('billAmt');
        tipAmtInput = document.getElementById('tipAmt');

        billAmtInput.value = 1;
        tipAmtInput.value = 0;
    });

    describe("Testing sumPaymentTotal", function() {
        it('should return total', function() {
            submitPaymentInfo();

            let bill = sumPaymentTotal("billAmt");
            let tip = sumPaymentTotal("tipAmt");

            expect(bill).toEqual(1);
            expect(tip).toEqual(0);
        });
    });

    describe("Testing calculateTipPercent", function() {
        it('should return tip percent', function() {
            expect(calculateTipPercent(101, 25)).toEqual(25);
        });
    });

    afterEach(function() {
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
    });
});
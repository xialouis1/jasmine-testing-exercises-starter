describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput = document.getElementById('billAmt');
        tipAmtInput = document.getElementById('tipAmt');

        billAmtInput.value = 1;
        tipAmtInput.value = 0;
    });

    describe("Testing submitPaymentInfo()", function() {
        it('should add a new payment to allPayments on submitPaymentInfo() given integer', function() {
            billAmtInput.value = 148;
            tipAmtInput.value = 21;
            submitPaymentInfo();
            expect(Object.keys(allPayments).length).toEqual(1);
            expect(allPayments['payment1']['billAmt']).toEqual('148');
            expect(allPayments['payment1']['tipAmt']).toEqual('21');
        });
    
        it('should add a new payment to allPayments on submitPaymentInfo() given string', function() {
            billAmtInput.value = '192';
            tipAmtInput.value = '13';
            submitPaymentInfo();
            expect(Object.keys(allPayments).length).toEqual(1);
            expect(allPayments.payment1.billAmt).toEqual('192');
            expect(allPayments.payment1.tipAmt).toEqual('13');
        });
    });

    describe("Testing createCurPayment()", function() {
        it('should return undefined on createCurPayment()', function() {
            billAmtInput = '';
            tipAmtInput = '';
            expect(createCurPayment()).toEqual(undefined);
        });

        it('should create a new object on createCurPayment()', function() {
            let obj = createCurPayment();
            expect(obj.billAmt).toEqual('1');
            expect(obj.tipAmt).toEqual('0');
        });
    });

    describe("Testing appendPaymentTable(curPayment)", function() {
        it('should append new row to paymentTBody', function() {
            let curPayment = createCurPayment();
            appendPaymentTable(curPayment);

            expect(paymentTbody.querySelector('#payment0')).not.toEqual(null)
        });
    });

    afterEach(function() {
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
    });
});
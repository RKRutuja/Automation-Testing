const { isPolicyEligible } = require("./eligibility");

describe("Policy Eligibility", () => {

    test("Customer aged 35 with income should be eligible", () => {

        const customer = {
            age: 35,
            income: 600000,
            isBlocked: false
        };

        expect(isPolicyEligible(customer)).toBe(true);
    });


    test("Customer below 18 should not be eligible", () => {

        const customer = {
            age: 16,
            income: 600000,
            isBlocked: false
        };

        expect(isPolicyEligible(customer)).toBe(false);
    });


    test("Customer above 60 should not be eligible", () => {

        const customer = {
            age: 65,
            income: 600000,
            isBlocked: false
        };

        expect(isPolicyEligible(customer)).toBe(false);
    });


    test("Customer with zero income should not be eligible", () => {

        const customer = {
            age: 35,
            income: 0,
            isBlocked: false
        };

        expect(isPolicyEligible(customer)).toBe(false);
    });


    test("Blocked customer should not be eligible", () => {

        const customer = {
            age: 35,
            income: 600000,
            isBlocked: true
        };

        expect(isPolicyEligible(customer)).toBe(false);
    });

});
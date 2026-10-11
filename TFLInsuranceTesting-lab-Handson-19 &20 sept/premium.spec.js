const { calculatePremium } = require("./premium");

describe("Premium Calculation", () => {

    test("Customer below 30 should pay 2% premium", () => {

        const result = calculatePremium(1000000, 25);

        expect(result).toBe(20000);
    });


    test("Customer between 30 and 49 should pay 3% premium", () => {

        const result = calculatePremium(1000000, 40);

        expect(result).toBe(30000);
    });


    test("Customer aged 50 or above should pay 5% premium", () => {

        const result = calculatePremium(1000000, 55);

        expect(result).toBe(50000);
    });

});
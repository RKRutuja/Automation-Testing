const { isNomineeValid } = require("./nominee");

describe("Nominee Validation", () => {

    test("Valid adult spouse should be accepted", () => {

        const nominee = {
            name: "Priya",
            age: 35,
            relationship: "Spouse"
        };

        expect(isNomineeValid(nominee)).toBe(true);
    });


    test("Nominee without name should be rejected", () => {

        const nominee = {
            name: "",
            age: 35,
            relationship: "Spouse"
        };

        expect(isNomineeValid(nominee)).toBe(false);
    });


    test("Nominee below 18 should be rejected", () => {

        const nominee = {
            name: "Rahul",
            age: 15,
            relationship: "Sibling"
        };

        expect(isNomineeValid(nominee)).toBe(false);
    });


    test("Invalid relationship should be rejected", () => {

        const nominee = {
            name: "Amit",
            age: 30,
            relationship: "Friend"
        };

        expect(isNomineeValid(nominee)).toBe(false);
    });

});
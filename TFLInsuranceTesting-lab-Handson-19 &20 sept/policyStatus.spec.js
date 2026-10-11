const {
    isValidStatusTransition
} = require("./policyStatus");

describe("Policy Status Transition", () => {

    test("Pending policy can become Active", () => {

        expect(
            isValidStatusTransition("Pending", "Active")
        ).toBe(true);
    });


    test("Active policy can become Expired", () => {

        expect(
            isValidStatusTransition("Active", "Expired")
        ).toBe(true);
    });


    test("Active policy can become Cancelled", () => {

        expect(
            isValidStatusTransition("Active", "Cancelled")
        ).toBe(true);
    });


    test("Expired policy cannot become Active", () => {

        expect(
            isValidStatusTransition("Expired", "Active")
        ).toBe(false);
    });


    test("Cancelled policy cannot become Active", () => {

        expect(
            isValidStatusTransition("Cancelled", "Active")
        ).toBe(false);
    });


    test("Pending policy cannot directly become Expired", () => {

        expect(
            isValidStatusTransition("Pending", "Expired")
        ).toBe(false);
    });

});
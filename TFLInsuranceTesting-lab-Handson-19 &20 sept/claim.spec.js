const { isClaimApproved } = require("./claim");

describe("Claim Approval", () => {

    test("Active policy with paid premium and valid amount should be approved", () => {

        const claim = {
            policyStatus: "Active",
            premiumPaid: true,
            sumInsured: 1000000,
            claimAmount: 300000
        };

        expect(isClaimApproved(claim)).toBe(true);
    });


    test("Claim should be rejected when policy is inactive", () => {

        const claim = {
            policyStatus: "Inactive",
            premiumPaid: true,
            sumInsured: 1000000,
            claimAmount: 300000
        };

        expect(isClaimApproved(claim)).toBe(false);
    });


    test("Claim should be rejected when premium is not paid", () => {

        const claim = {
            policyStatus: "Active",
            premiumPaid: false,
            sumInsured: 1000000,
            claimAmount: 300000
        };

        expect(isClaimApproved(claim)).toBe(false);
    });


    test("Claim should be rejected when claim exceeds sum insured", () => {

        const claim = {
            policyStatus: "Active",
            premiumPaid: true,
            sumInsured: 1000000,
            claimAmount: 1500000
        };

        expect(isClaimApproved(claim)).toBe(false);
    });

});
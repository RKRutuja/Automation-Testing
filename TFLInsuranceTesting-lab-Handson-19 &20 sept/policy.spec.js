const{ isEligibleForRenewal} = require("./policy");
test("Active policy should be eligible for renewal",() =>{

    const policy = {
        policyNumber: "POL1001",
        status: "Active"
    };

    const result = isEligibleForRenewal(policy);

    expect(result).toBe(true);
});

test("Expired policy should not be eligible for renewal", () => {

    const policy = {
        policyNumber: "POL1002",
        status: "Expired"
    };

    const result = isEligibleForRenewal(policy);

    expect(result).toBe(false);
});


test("Cancelled policy should not be eligible for renewal", () => {

    const policy = {
        policyNumber: "POL1003",
        status: "Cancelled"
    };

    const result = isEligibleForRenewal(policy);

    expect(result).toBe(false);
});


test("Inactive policy should not be eligible for renewal", () => {

    const policy = {
        policyNumber: "POL1004",
        status: "Inactive"
    };

    const result = isEligibleForRenewal(policy);

    expect(result).toBe(false);
});
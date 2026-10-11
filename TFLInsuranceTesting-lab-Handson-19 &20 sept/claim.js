function isClaimApproved(claim) {

    if (
        claim.policyStatus === "Active" &&
        claim.premiumPaid === true &&
        claim.claimAmount <= claim.sumInsured
    ) 
    {
        return true;
    }

    return false;
}

module.exports = {
    isClaimApproved
};
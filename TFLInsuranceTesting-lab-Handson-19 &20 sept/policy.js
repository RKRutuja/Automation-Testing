function isEligibleForRenewal(policy)
{
    if(policy.status=="Active")
    {
        return true;
    }
    return false;
}

module.exports =
{
    isEligibleForRenewal
};
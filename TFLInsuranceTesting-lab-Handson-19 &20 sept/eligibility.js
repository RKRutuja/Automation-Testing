function isPolicyEligible(customer) {

    if (
        customer.age >= 18 &&
        customer.age <= 60 &&
        customer.income > 0 &&
        customer.isBlocked === false
    ) {
        return true;
    }

    return false;
}

module.exports = {
    isPolicyEligible
};
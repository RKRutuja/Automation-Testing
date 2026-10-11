exports.CalculateInterest = function(interestRate, balance){
    const interestEarned = balance * (interestRate / 100);
    return interestEarned;
};

function calculatePremium (policyAmount, age){

    let rate;

    if(age<30)
        {
        rate = 0.02;
        }
    else if (age<50)
        {
        rate = 0.03;
         }
    else {
        rate = 0.05;
    }

    return policyAmount * rate;
}

module.exports = {
    calculatePremium
};
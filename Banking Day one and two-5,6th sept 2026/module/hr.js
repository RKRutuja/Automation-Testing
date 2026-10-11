

//reusable functions
exports.getInhandSalary = function(salary, tax){
    let total=salary-tax;
    return total;
};

exports.getEMI = function(principal, rate, time){
    let emi=(principal*rate*time)/(1-(Math.pow(1+rate, -time)));
    return emi;
}


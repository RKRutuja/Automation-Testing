

exports.dispatchPolicy=function(policy){
    
    if(policy.policy_type=="Health Insurance"){
        console.log("Health Policy is dispatched");
        //notification logic send email to customer
    }else if(policy.policy_type=="Life Insurance"){
        console.log("Life Policy is dispatched");
        //notification logic send email to customer
    }
    
}

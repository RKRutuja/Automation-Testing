
let policies= require("../data/policies.json");
let policBusinessLogic=require("../module/policy.js");

for(let i=0; i<policies.length; i++){
      policBusinessLogic.dispatchPolicy(policies[i]);
     console.log("Policy ID: "+policies[i].policyid+" - "+policies[i].policy_type );
}

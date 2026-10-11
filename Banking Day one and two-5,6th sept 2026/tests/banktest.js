var accounts= require("../data/accounts.json");
var InterestModule=require("../module/bankbusiness.js");

//Iteration using for loop

for(let i=0; i<accounts.length; i++)
    {   


    const Accounts = InterestModule.CalculateInterest(accounts[i].interestRate,accounts[i].balance);
    console.log(accounts[i].customerName+": "  +accounts[i].accountNumber + " - " + accounts[i].accountType+" - "+"Balance:" +accounts[i].balance+" = "+ "Interest Earned:", Accounts);

}
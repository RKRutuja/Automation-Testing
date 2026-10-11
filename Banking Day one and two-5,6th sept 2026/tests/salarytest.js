
//Clean code and reusable code
//KISS:Keep It Simple Stupid


var salaries= require("../data/salaries.json");
var libModule=require("../module/hr.js");

//Iteration using for loop

for(let i=0; i<salaries.length; i++){   

    let inhandSalary=libModule.getInhandSalary(salaries[i].salary, salaries[i].tax);
    console.log(salaries[i].name+": "  + salaries[i].position + " - " + salaries[i].salary+" - "+salaries[i].tax+" = "+ " Inhand Salary: " +inhandSalary);
}
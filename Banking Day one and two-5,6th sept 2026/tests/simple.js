
let fullname="Ravi Tambade";
let result=89;  //global variable
    
console.log(fullname);
console.log(result);

{
    let count=56;  //scope variable
    console.log(count);
}
console.log("After block");
console.log(result);
 
//Write once and use multiple times
 
let raviInhandSalary=libModule.getInhandSalary(50000, 5000);
console.log("Inhand Salary is: "+raviInhandSalary);
let runInhandSalary=libModule.getInhandSalary(60000, 6000);
console.log("Inhand Salary is: "+runInhandSalary);
let adityaInhandSalary=libModule.getInhandSalary(70000, 7000);
console.log("Inhand Salary is: "+adityaInhandSalary);

let raviEMI=libModule.getEMI(500000, 0.08, 60);
console.log("EMI is: "+raviEMI);

let sachinEMI=libModule.getEMI(600000, 0.09, 72);
console.log("EMI is: "+sachinEMI);
let adityaEMI=libModule.getEMI(700000, 0.1, 84);
console.log("EMI is: "+adityaEMI);
 
 
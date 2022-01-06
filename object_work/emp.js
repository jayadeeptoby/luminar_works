var employee={
    eid:1000,
    ename:"tom",
    salary:25000,
    desig:"devaloper",
    exp:2
}
if("exp" in employee){
employee.exp+=1
}
else{
    employee.exp=1;
}
console.log(employee);

// console.log(employee.desig);
// employee.experince=2
// console.log(employee);
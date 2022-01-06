var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 7000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]
// for(let employe of employees){
//     console.log(employe[1]);
// }

// for(let employee of employees){
//     console.log(employee[5]-employee[4]);
// }
// for(let employee of employees){
//     if(employee[5]-employee[4]>10){
//         console.log(employee);
//     }
// }
// max_salary=0;
// for(let emp of employees){
//     if(emp[2]>max_salary){
//         max_salary=emp[2]
//     }
// }
// console.log(max_salary);

// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);
// employees.sort((e1,e2)=>e1[2]-e2[2])
// console.log(employees[0][2]);


// var developer = []
// for (let emp of employees) {
//     if (emp[3] = "developer") {
//         developer.push(emp)
//     }
// }
// developer.sort((e1,e2)=>e2[2]-e1[2])
// console.log(developer[0][2]);
// for (let emp of employees) {
//     if (emp[1][0] == "A" || emp[1][0] == "a") {
//         console.log(emp);
//     }
// }
for(let emp of employees){
    if(emp[4]>2009 && emp[5]<2016){
        console.log(emp[1]);
    }
}





    // console.log(employees.length);

    // for(let emp of employees){
    //     if(emp[3])="developer" && e
    // }

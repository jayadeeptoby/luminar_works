var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],
]
// for(student of students){
//     console.log(student[1]);
// }
// for(student of students){
//     if(student[2]=="mearnstack"){
//         console.log(student);
//     }
// }
// for(student of students){
//     if(student[3]>160){
//         console.log(student);
//     }
// }
// for(student of students){
//     if(student[2]=="django"&& student[3]>168){
//         console.log(student[1]);

//     }
// }
max_total=0;
for(student of students){
    if(student[3]>max_total){
        max_total=student[3]
    }
}
console.log(max_total);

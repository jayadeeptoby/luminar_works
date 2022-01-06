var student={
    name:"ahan",
    age:18,
    course:"ms"
}
console.log(student.course);
console.log("gender" in student);
student["gender"]="male"
student.total=150
console.log(student);
if(student.total>145){
    student.grade="A+"

}
else{
    student.grade="A"
}
console.log(student);
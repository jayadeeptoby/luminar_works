class student{
    constructor(name,gender,age){
        this.name=name;
        this.gender=gender;
        this.age=age;

    }
    printPerson(){
        console.log(this.name,this.gender,this.age);
    }
}
var obj=new student("akil","male","18")
 obj.printPerson()

var obj1=new student("ram","male","17")
obj1.printPerson()
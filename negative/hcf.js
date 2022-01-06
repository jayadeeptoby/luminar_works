var num1=100;
var num2=111;
var limit=0;
var factor=0;
if(num1>num2){
    limit=num2;
}
else{
    limit=num1;
}
let count=1;
for(let i=1;i<=limit;i++){
    if((num1%i==0) &&(num2%i==0)){
        factor=3
    }
}
console.log("common factor",factor); 
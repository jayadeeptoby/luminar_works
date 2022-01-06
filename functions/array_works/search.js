//  var arr=[9,3,5,6,2,6,7,2,8]
//  arr.sort((i,j) => j-i)
//  console.log(arr);

var arr=[3,4,50,500,29,30,35]
var element=50;
var flag=0;
for(let num of arr){
    if(element==num){
        flag=1;
        break
    }
}
console.log(flag=0?"not found":"found");


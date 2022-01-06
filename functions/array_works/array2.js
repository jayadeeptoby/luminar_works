// var arr=[9,6,7,8,3,2,1]
// var op=[]
// for(let num of arr){
//     if(num>5){
//         op.push(num+1)
//     }
//     else{
//         op.push(num-1)
//     }
// }
// console.log(op);

// var arr=[2,3,4,5]
// var sum=7;
// var flag=0;
// for(let i of arr){
//     for(let j of arr){
//         if(i+j==sum){
//             console.log(`pairs are ${i},${j}`);
//             flag=1;

//         }

//     }
// }     
var arr = [2, 3, 4, 5]
var element = 8;

var upp = arr.length - 1, low = 0;
while (low < upp) {
    let cur_sum = arr[low] + arr[upp]

    if (element == cur_sum) {
        console.log(`pair(${arr[low]},${arr[upp]})`);
        break

    }
    else if (cur_sum < element) {
        low += 1
    }
    else if (cur_sum > element) {
        upp -= 1
    }

}
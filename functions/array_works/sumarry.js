var arr = [2, 4, 6]
// op==[10,8,6]
let p1 = 0;
var sum = 0;
for (let i of arr) {
    sum += i
}
var op=[]
for(let i of arr){
    op.push((sum-i))

}console.log(op);
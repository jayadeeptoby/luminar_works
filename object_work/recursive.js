// var pattern="ABABBC"
// var wc={}
// var op=[]

// Array.from(pattern).map(char=>char in wc? op.push(char):wc[char]=1)
// console.log(op[0]);

// pattern.split(" ").map(char=>char in wc? op.push(char):wc[char]=1)
// console.log(op);
 
// for(let char of pattern){
//     if(char in wc){
//         console.log("first recursive char",char);
//         break
//     }
//     else{
//         wc[char]=1
//     }
// }
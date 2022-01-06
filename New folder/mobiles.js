var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
     [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]

// var isAvl=mobiles.some(mob=>mob[3]==10000)
// console.log(isAvl);
// var isAvl=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(isAvl);
// var large_prize=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)
// console.log(large_prize);

// var lowcost_mob=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
// console.log(lowcost_mob);
// var lowest_mob=mobiles.filter(mob=>mob[3]==lowcost_mob)
// console.log(lowest_mob);

// var mobile_name=mobiles.map(mob=>mob[2])
// console.log(mobile_name);

// var prize=mobiles.map(mob=>mob[3])
// console.log(prize);

// var mob_name=mobiles.filter(mob=>mob[1]=="samsnug").map(mob=>mob[2])
// console.log(mob_name);

// var prize=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
// console.log(prize);

// var prize=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000).map(mob=>[mob[1],mob[3]])
// console.log(prize);
// var mob_5g=mobiles.filter(mob=>mob[6]=="5G")
// console.log(mob_5g);
// var mob_prize=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[1],mob[3]])
// console.log(mob_prize);
// var samsung_mob=mobiles.filter(mob=>mob[1]=="samsung" && mob[5]=="AMOLED" && mob[6]=="4g").map(mob=>[mob[1],mob[3]])
// console.log(samsung_mob);

// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0][1]);

// for(let mob of mobiles){
//     if(mob[4]="snapdragon"){
//         console.log(mob[1]);
//     }
// }
// var snap=[]
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon" && mob[6]=="5g"){
//         snap.push(mob)
//     }
// }
// snap.sort((m1,m2)=>m2[3]-m1[3])
// console.log(snap[snap.length-1]);

// for(let mob of mobiles){
//     console.log(mob[3]<1000?"true":"false");
// }
// for(let mob of mobiles){
// if(mob[1]=="samsung"){
//     console.log(mob);
// }   
// }
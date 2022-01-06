var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
    // var high_test=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
    // console.log(high_test);
// q2 district with higest 1 dose vaccination rate
        // var greenDistrict=coivd_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
        // var highest_firstdoes=coivd_data.filter(d=>d[5]==greenDistrict)
        // console.log(highest_firstdoes);


// q3 district with lowest death cases
    // var low_death=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)[3]
    // var low_death_district=coivd_data.filter(d=>d[3]==low_death)
    // console.log(low_death_district);
// q4 sort district with +ve cases
    // coivd_data.sort((d1,d2)=>d1[2]-d2[2])
    // console.log(coivd_data);


// q5 sort the districts based on 1st dose
    // coivd_data.sort((d1,d2)=>d1[5]-d2[5])
    // console.log(coivd_data);

// q6 is there any states with +ve cases > 60000
    // var isAvl=coivd_data.some(d=>d[2]>60000)
    // console.log(isAvl);

// q7 print trissur details
    // var trissur_dts=coivd_data.find(d=>d[1]=="thrissur")
    // console.log(trissur_dts);

// q8 total nu,ber of +ve cases
// var total=coivd_data.map(d=>d[2]).reduce((d1,d2)=>d1+d2)
// console.log(total);

// q9 total number of cured cases
    // var total_cured=coivd_data.map(d=>d[4]).reduce((d1,d2)=>d1+d2)
    // console.log(total_cured);


// q10 cured numbers of iduky
var cured_idukki=coivd_data.find(d=>d[1]=="iduky")[4]
console.log(cured_idukki);

// q11 total number of death cases 
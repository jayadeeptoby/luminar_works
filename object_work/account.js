var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//  q1 total number of account
// console.log(accounts.length);

// q2 print all account number whose ac-type savings
// accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))

// balance of acno=1000
// accounts.filter(data=>data.acno==1000).forEach(data=>console.log(data.balance))
// let balance=accounts.find(data=>data.acno==1000).balance

// all g_pay transations details
// accounts.map(data=>data.transactions).flat().filter(trans=>trans.method=="g-pay").forEach(t=>console.log(t))

// credit transationd of 1002
// accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002).forEach(t=>console.log(t))

// higest balance account details
// var max=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
// console.log(max);

// transation history of 1002
var debitTransaction=accounts.find(data=>data.acno==1002).transactions
var creditTransaction=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002)
var transactionHistory={"debitTransaction":debitTransaction,"creditTransaction":creditTransaction}
console.log(transactionHistory);


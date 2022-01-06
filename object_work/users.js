var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}
// 1003 name
// console.log(users[1003].personName);

// 1005 exit or not
// console.log(1000 in users); 

function authenticate(ac_num,password) {
    if(ac_num in users){
        let pwd=users[ac_num].password
        if(pwd==password){
            return 1

        }
        else{
            return -1
        }
    }
    else{
        return 0
    }
}

function foundTransfer(form_acno,to_acno,amount) {
    if(validateAccountNumber(form_acno)&& validateAccountNumber(to_acno)){
        let oldBal=users[form_acno].balance;
        if(amount>oldBal){
            console.log("insufficent balance");
        }
        else{
            users[form_acno].balance=amount
            console.log(`your acno ${from_acno} account has been debited with ${amount}` );
        }

    }
    
    
}
    console.log(authenticate(1007,"userone"));
    

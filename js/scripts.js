// Business logic
let currentId = 0;
let bankAccount;
let accounts = [];

class BankAccount {
  constructor(name, intDeposit){
    this.name = name;
    this.balance = intDeposit;
    this.currentId = currentId++;
    this.history = ''; 
  }

  timeStamp(){
    return new Date();
  }

   deposit(amount) {
     if(amount > 0){
    this.balance += amount;
    this.history += `<h4>${this.timeStamp()}</h4> <p>Deposited: $${amount}, Balance: $${this.balance}<p>`;
    return true;
    }
    else {
    return false;
  }
   } 

   withdrawal(amount){
     if(amount > 0){
     if(amount <= this.balance){
       this.balance -= amount;
       this.history += `<h4>${this.timeStamp()}</h4> <p>Withdrawn: $${amount}, Balance: $${this.balance}<p>`;
       return true;
      } else {
       alert(`Withdraw error: ${amount} exceeds current funds!`);
      return false;
     }
   
   }
   
   else {
     return false;
   }
}
};

// UI Logic
$(document).ready(function(){
  $('#existing-account').hide();
  $('#balance').hide();
  $('#new-account').submit(function(){
    event.preventDefault();
    $('#balance').show();
    const userName = $('#name').val();
    const initialDeposit = parseFloat($('#initial-deposit').val());
    bankAccount = new BankAccount(userName, initialDeposit);
    accounts.push(bankAccount);
    console.log(bankAccount.userName, bankAccount.initialDeposit);
    $('#new-account').toggle();
    $('#existing-account').toggle();
    $('#current-balance').val(bankAccount.balance);
  })



  $('#existing-account').submit(function(){
    event.preventDefault();
    if(!$('#deposit').val()){
      $('#deposit').val(0);
    };
    if(!$('#withdrawal').val()){
      $('#withdrawal').val(0);
    };
    const depositAmount = parseFloat($('#deposit').val());
    const withdrawalAmount = parseFloat($('#withdrawal').val());
    // $('#new-account').toggle();
    // $('#existing-account').toggle();
    // bankAccount.balance = (bankAccount.balance + depositAmount - withdrawalAmount);
    let depositStatus = bankAccount.deposit(depositAmount);
    let withdrawalStatus = bankAccount.withdrawal(withdrawalAmount);
    $('#current-balance').val(`$${bankAccount.balance}`);
    $('#deposit').val('');
    $('#withdrawal').val('');
    
    // bankAccount.history += `<h4>${time}</h4> <p>Deposited: $${depositAmount}, Withdrawn: $${withdrawalAmount}, Balance: $${bankAccount.balance}<p>`;
    if(depositStatus || withdrawalStatus){
      $('#history').empty();
      $('#history').append(bankAccount.history);
    }
    console.log(bankAccount.userName, bankAccount.initialDeposit);
  })

})


// Spec 1
// Input: User submits a transaction
// Output: All transactions history appears under balance with timestamp. 
// Business logic
let currentId = 0;
let bankAccount;

class BankAccount {
  constructor(name, intDeposit){
    this.name = name;
    this.balance = intDeposit;
    this.currentId = currentId++;
  }

   deposit(amount) {
    this.balance += amount;
   } 

   withdrawal(amount){
   this.balance -= amount;
   }

}

// UI Logic
$(document).ready(function(){
  $('#new-account').submit(function(){
    event.preventDefault();
    const userName = $('#name').val();
    const initialDeposit = $('#initial-deposit').val();
    bankAccount = new BankAccount(userName, initialDeposit);
    console.log(bankAccount);

  })

})

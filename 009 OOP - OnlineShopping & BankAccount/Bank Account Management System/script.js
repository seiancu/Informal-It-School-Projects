// Bank Account Class
function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

//Bank Account deposit method
BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

// Bank Account withraw method
BankAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance = this.balance - amount;
    console.log(
      `You made a withdraw of $${amount}. Your new Bank Account balance is: $${newBankAccount.balance}.`
    );
  } else {
    console.log(`You exceed your balance with ${this.balance - amount}`);
  }
};

// Bank Account get balance method
BankAccount.prototype.getBalance = function () {
  return this.balance;
};

// Savings Account subclass
function SavingsAccount(accountNumber, balance, interestRate) {
  BankAccount.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.construct = SavingsAccount;

// Savings Account withdraw method
SavingsAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance = this.balance - amount;
    console.log(
      `You made a withdraw of $${amount}. Your new Savings Account balance is: $${newSavingsAccount.balance}.`
    );
  } else {
    console.log(`You exceed your balance with $${this.balance - amount}`);
  }
};

//Checking Account subclass
function CheckingAccount(accountNumber, balance, transactionLimit) {
  BankAccount.call(this, accountNumber, balance);
  this.transactionLimit = transactionLimit;
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.construct = CheckingAccount;

//Checking Account withdraw method
CheckingAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    if (amount <= this.transactionLimit) {
      this.balance = this.balance - amount;
      console.log(
        `You made a withdraw of $${amount}. Your new Checking Account balance is: $${newCheckingAccount.balance}.`
      );
    } else {
      console.log(
        `You exceeded the Transaction limit by: $${
          this.transactionLimit - amount
        }`
      );
    }
  } else {
    console.log(`You exceed your balance with $${this.balance - amount}`);
  }
};

// Creating a new Bank Account
var newBankAccount = new BankAccount(123456, 10000);
console.log(`Congratulations! You just open a new Bank Account with us.
Your Account Number is: ${newBankAccount.accountNumber}.
Your balance is: $${newBankAccount.balance}.`);

// Making a deposit to the Bank Account
newBankAccount.deposit(200);
console.log(
  `You made a deposit of $200. Your new Bank Account balance is: $${newBankAccount.balance}.`
);

// Making a withdraw to the Bank Account
newBankAccount.withdraw(800);

// Creating a new Savings Account
var newSavingsAccount = new SavingsAccount(654321, 1000, 5);
console.log(`Congratulations! You just open a new Savings Account with us.
Your Account Number is: ${newSavingsAccount.accountNumber}.
Your balance is: $${newSavingsAccount.balance}.
Your interest rate is: %${newSavingsAccount.interestRate}.`);

newSavingsAccount.deposit(500);
console.log(
  `You made a deposit of $500. Your new Savings Account balance is: $${newSavingsAccount.balance}.`
);

newSavingsAccount.withdraw(200);

// console.log(newSavingsAccount);

var newCheckingAccount = new CheckingAccount(789456, 500, 200);
console.log(`Congratulations! You just open a new Checking Account with us.
Your Account Number is: ${newCheckingAccount.accountNumber}.
Your balance is: $${newCheckingAccount.balance}.
Your transaction limit is: $${newCheckingAccount.transactionLimit}.`);

newCheckingAccount.deposit(900);
console.log(
  `You made a deposit of $900. Your new Checking Account balance is: $${newCheckingAccount.balance}.`
);

newCheckingAccount.withdraw(100);

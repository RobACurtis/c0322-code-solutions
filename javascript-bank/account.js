/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0) {
    return false;
  } else if (!Number.isInteger(amount)) {
    return false;
  } else {
    var depo = new Transaction('deposit', amount);
    this.transactions.push(depo);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0) {
    return false;
  } else if (!Number.isInteger(amount)) {
    return false;
  }
  var withdraw = new Transaction('withdrawal', amount);
  this.transactions.push(withdraw);
  return true;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};

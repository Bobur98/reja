const Account = require('./account');
Account.tellMeAboutClass();
Account.tellMeTime();

console.log('============');

const myAccount = new Account('Brain', 200000, 654564654);
myAccount.giveMeDetails();

myAccount.makeDeposit(100000);

myAccount.withdrawMoney(40000);
myAccount.makeDeposit(20000);
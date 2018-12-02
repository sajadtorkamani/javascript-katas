const moment = require('moment');

export const dateNbDays = (deposit, target, interestRate) => {
  let balance = deposit;
  let numDays = 0;
  const dailyInterest = interestRate / 36000;

  while (balance < target) {
    balance = balance * (1 + dailyInterest);
    numDays += 1;
  }

  const date = new Date(2016, 0, 1 + numDays);

  return moment(date).format('YYYY-MM-DD');
};
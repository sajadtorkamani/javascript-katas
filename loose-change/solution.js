/**
 * @param cents {number}
 * @return {Object}
 */
const looseChange = cents => {
  const coinTypes = { Quarters: 25, Dimes: 10, Nickels: 5, Pennies: 1 };
  let change = { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 };

  if (cents <= 0) {
    return change;
  }

  let remainingCents = Math.floor(cents);

  for (let coin in coinTypes) {
    const coinValue = coinTypes[coin];
    const numCoinType = Math.floor(remainingCents / coinValue);

    if (numCoinType >= 1) {
      change[coin] = numCoinType;
      remainingCents = remainingCents % coinValue;
    }
  }

  return change;
};

export default looseChange;
export const change = (customer, items, cash) => {
  const itemsTotal = items.reduce((a, v) => a + v);
  let change = cash - itemsTotal;

  if (customer === 'John' && change > 0) {
    const decimalPortion = (change - Number.parseInt(change)) * 2;
    return +(Number.parseInt(change) + decimalPortion).toFixed(2);
  }

  if (customer === 'John' && change <= 0) {
    return 0;
  }

  return +change.toFixed(2);
};
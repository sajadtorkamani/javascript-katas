const balanceStatements = orders => {
  if (orders.length === 0) {
    return 'Buy: 0 Sell: 0';
  }

  let invalidOrders = [];
  let buyTotal = 0;
  let sellTotal = 0;

  const isValidOrder = order => /^[^ ]+ \d+ \d*\.\d+ (B|S)$/.test(order);

  orders.split(', ').forEach(order => {
    if (isValidOrder(order)) {
      const isBuyOrder = order.endsWith('B');
      const value = order
        .split(' ')
        .slice(1, 3)
        .reduce((a, b) => a * b);

      isBuyOrder ? (buyTotal += value) : (sellTotal += value);
    } else {
      invalidOrders.push(order + ' ;');
    }
  });

  // Build summary
  const validOrdersSummary = `Buy: ${Math.round(buyTotal)} Sell: ${Math.round(sellTotal)}`;
  const invalidOrdersSummary = invalidOrders.length > 0
    ? `; Badly formed ${invalidOrders.length}: ${invalidOrders.join('')}`
    : '';

  return validOrdersSummary + invalidOrdersSummary;
};

export default balanceStatements;

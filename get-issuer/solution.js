const getIssuer = number => {
  const issuers = {
    AMEX: /^(34|37)(\d){13}$/,
    Discover: /^6011(\d){12}$/,
    Mastercard: /^(51|52|53|54|55)(\d){14}$/,
    VISA: /^4((\d){12}|(\d){15})$/,
  };

  for (let issuer in issuers) {
    const pattern = issuers[issuer];

    if (pattern.test(number.toString())) {
      return issuer;
    }
  }

  return 'Unknown';
};

export default getIssuer;
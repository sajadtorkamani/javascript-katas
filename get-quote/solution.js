const getQuote = (quotes, hero) => {
  const quoteIndex = +hero.match(/\d/)[0];
  const quote = quotes[quoteIndex];

  switch (hero[0]) {
    case 'B':
      return `Batman: ${quote}`;
    case 'R':
      return `Robin: ${quote}`;
    case 'J':
      return `Joker: ${quote}`;
    default:
      break;
  }
};

export default getQuote;
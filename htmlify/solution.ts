const htmlify = (input: string): string => {
  const encoded = input.replace(/[–’&“”]/g, symbol => {
    switch (symbol) {
      case '–':
        return '&ndash;';
      case '’':
        return '&rsquo;';
      case '&':
        return '&amp;';
      case '“':
        return '&ldquo;';
      case '”':
        return '&rdquo;';
      default:
        return symbol;
    }
  });

  return `<p>${encoded}</p>`;
};

export default htmlify;

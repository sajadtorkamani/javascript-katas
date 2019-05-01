const list = people => {
  const names = people.map(p => p.name);

  switch (names.length) {
    case 0: return '';
    case 1: return names[0];
    case 2: return names.join(' & ');

    default:
      const last = names.pop();

      return names.join(', ') + ' & ' + last;
  }
};

export default list;
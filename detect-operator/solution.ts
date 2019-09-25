const detectOperator = (phoneNum: number): string => {
  const dictionary: { [key: string]: string } = {
    '039': 'Golden Telecom',
    '050': 'MTS',
    '063': 'Life:)',
    '066': 'MTS',
    '067': 'Kyivstar',
    '068': 'Beeline',
    '093': 'Life:)',
    '095': 'MTS',
    '096': 'Kyivstar',
    '097': 'Kyivstar',
    '098': 'Kyivstar',
    '099': 'MTS'
  };

  const operatorCode = phoneNum.toString().substr(1, 3);

  return dictionary[operatorCode] || 'no info';
};

export default detectOperator;

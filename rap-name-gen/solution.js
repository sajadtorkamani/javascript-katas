export const roundedDigitsAverage = digitsStr => {
  const digits = digitsStr.split('').map(Number);

  return Math.ceil(digits.reduce((a, v) => a + v) / digits.length);
};

export const rapNameGen = dob => {
  const nums = {
    0: '0ero', 1: '1ne', 2: '2wo', 3: '3hree', 4: '4our',
    5: '5ive', 6: '6ix', 7: '7even', 8: '8ight', 9: '9ine',
  };

  const num1 = roundedDigitsAverage(dob.slice(0, 2));
  const num2 = roundedDigitsAverage(dob.slice(-2));

  return `${nums[num1]} ${nums[num2]}`;
};

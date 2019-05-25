/**
 * @param {string} time
 * @return {string}
 */
const fizzBuzzCuckooClock = time => {
  const [hour, minute] = time.split(':');
  const isDivisibleByFive = minute % 5 === 0;
  const isDivisibleByThree = minute % 3 === 0;

  switch (true) {
    case isDivisibleByFive && isDivisibleByThree:
      if (minute === '00') {
        const numCuckoos = +(hour === '00' ? 12 : hour > 12 ? hour - 12 : hour);
        return new Array(numCuckoos).fill('Cuckoo').join(' ');
      }
      if (minute === '30') {
        return 'Cuckoo';
      }
      return 'Fizz Buzz';
    case isDivisibleByFive:
      return 'Buzz';
    case isDivisibleByThree:
      return 'Fizz';
    default:
      return 'tick';
  }
};

export default fizzBuzzCuckooClock;

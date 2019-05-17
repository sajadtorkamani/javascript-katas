/**
 * TODO: a bit repetitive - should refactor.
 *
 * @param list {Array<Object>}
 * @return {boolean}
 */
const isAgeDiverse = list => {
  let ageGroups = {
    teens: false,
    twenties: false,
    thirties: false,
    fourties: false,
    fifties: false,
    sixties: false,
    seventies: false,
    eighties: false,
    nineties: false,
    hundreds: false
  };

  list.forEach(dev => {
    const age = dev.age;

    switch (true) {
      case age >= 100:
        ageGroups.hundreds = true;
        break;
      case age >= 90:
        ageGroups.nineties = true;
        break;
      case age >= 80:
        ageGroups.eighties = true;
        break;
      case age >= 70:
        ageGroups.seventies = true;
        break;
      case age >= 60:
        ageGroups.sixties = true;
        break;
      case age >= 50:
        ageGroups.fifties = true;
        break;
      case age >= 40:
        ageGroups.fourties = true;
        break;
      case age >= 30:
        ageGroups.thirties = true;
        break;
      case age >= 20:
        ageGroups.twenties = true;
        break;
      case age >= 13:
        ageGroups.teens = true;
        break;
      default:
        break;
    }
  });

  return Object.values(ageGroups).every(ageGroup => ageGroup === true);
};

export default isAgeDiverse;
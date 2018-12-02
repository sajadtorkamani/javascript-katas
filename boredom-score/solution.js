export const boredom = staff => {
  const staffDepartments = Object.values(staff);

  const departmentScores = {
    'accounts': 1,
    'finance': 2,
    'regulation': 3,
    'cleaning': 4,
    'retail': 5,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'canteen': 10,
    'pissing about': 25
  };

  const totalBoredomScore = staffDepartments
    .reduce((teamTotalBoredomScore, staffDepartment) => {
      return teamTotalBoredomScore + departmentScores[staffDepartment];
    }, 0);

  if (totalBoredomScore >= 100) {
    return 'party time!!';
  }

  if (totalBoredomScore > 80) {
    return 'i can handle this';
  }

  return 'kill me now';
};
const ranking = people => {
  let rankedPeople = people
    .sort(sortByPoints)
    .map((person, index) => ({ ...person, position: index + 1 }));

  rankedPeople.forEach((person, index) => {
    if (index === 0) { return; }

    const previousPerson = rankedPeople[index - 1];

    if (previousPerson.points === person.points) {
      rankedPeople[index].position = previousPerson.position;
    }
  });

  return rankedPeople;
};

const sortByPoints = (a, b) => {
  return a.points === b.points
    ? a.name.localeCompare(b.name)
    : b.points - a.points;
};

export default ranking;
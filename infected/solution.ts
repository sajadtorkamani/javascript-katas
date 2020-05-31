export const infected = (startMap: string): number => {
  const INFECTED = '1';
  const OCEAN = 'X';

  const totalPopulation = startMap.replace(new RegExp(OCEAN, 'g'), '').length;
  if (totalPopulation === 0) {
    return 0;
  }

  const endMap = startMap
    .split(OCEAN)
    .map(continent =>
      continent.includes(INFECTED)
        ? INFECTED.repeat(continent.length)
        : continent
    )
    .join(OCEAN);

  const totalInfected = (endMap.match(new RegExp(INFECTED, 'g')) || []).length;

  return (totalInfected / totalPopulation) * 100;
};

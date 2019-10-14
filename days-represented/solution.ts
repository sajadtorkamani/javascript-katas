const daysRepresented = (trips: number[][]): number => {
  const daysList: number[] = [];

  trips.forEach(trip => {
    const [startDay, endDay] = trip;

    for (let day = startDay; day <= endDay; day++) {
      if (!daysList.includes(day)) {
        daysList.push(day);
      }
    }
  });

  return daysList.length;
};

export default daysRepresented;

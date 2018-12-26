const fifa = (predictions, results) => {
  let index = 0;
  let totalWinnings = 0;

  results = results.map(result => {
    const [home, away] = result.split('-');

    return home === away
      ? 'Draw'
      : home > away ? 'Home' : 'Away';
  });


  for (let prediction in predictions) {
    const hasCorrectPrediction = prediction === results[index];

    if (hasCorrectPrediction) {
      const winning = predictions[prediction];
      totalWinnings += +winning.replace('£', '');
    }

    index++;
  }

  return `£${totalWinnings}`;
};

export default fifa;
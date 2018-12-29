const skiJump = mountain => {
  const mountainHeight = mountain.length;
  const speed = mountainHeight * 1.5;
  const jumpLength = (mountainHeight * speed * 9) / 10;
  const jumpLengthFormatted = jumpLength.toFixed(2);

  if (jumpLength >= 50) {
    return `${jumpLengthFormatted} metres: Gold!!`;
  }

  if (jumpLength >= 25) {
    return `${jumpLengthFormatted} metres: He's flying!`;
  }

  if (jumpLength >= 10) {
    return `${jumpLengthFormatted} metres: He's ok!`;
  }

  return `${jumpLengthFormatted} metres: He's crap!`
};

export default skiJump;
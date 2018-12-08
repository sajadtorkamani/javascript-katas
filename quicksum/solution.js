export const quicksum = packet => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (/[^A-Z ]/.test(packet)) {
    return 0;
  }

  return packet
    .split('')
    .reduce((acc, char, index) => {
      const packetPosition = index + 1;
      const alphabetPosition = alphabet.indexOf(char) + 1;

      return acc + (packetPosition * alphabetPosition);
    }, 0);
};

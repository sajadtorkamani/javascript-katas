export const isThueMorse = seq => {
  if (seq[0] === 1) {
    return false;
  }

  const seqA = seq.filter((v, i) => i % 2 === 0);
  const seqB = seq.filter((v, i) => i % 2 === 1);

  const smallestSeqLength = Math.min(seqA.length, seqB.length);

  for (let i = 0; i < smallestSeqLength; i++) {
    if (seqA[i] + seqB[i] !== 1) {
      return false;
    }
  }

  return true;
};
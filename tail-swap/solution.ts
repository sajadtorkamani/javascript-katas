const tailSwap = (words: string[]): string[] => {
  const heads = words.map(word => word.split(':')[0]);
  const tails = words.map(word => word.split(':')[1]);

  return [heads[0] + ':' + tails[1], heads[1] + ':' + tails[0]];
};

export default tailSwap;

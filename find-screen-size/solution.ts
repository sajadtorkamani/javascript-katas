const findScreenHeight = (width: number, ratio: string): string => {
  const [widthRatio, heightRatio]: number[] = ratio.split(':').map(Number);

  const height = (width / widthRatio) * heightRatio;

  return `${width}x${height}`;
};

export default findScreenHeight;

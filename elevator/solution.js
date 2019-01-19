const elevator = (left, right, call) => {
  const leftDistance = Math.abs(call - left);
  const rightDistance = Math.abs(call - right);

  return rightDistance <= leftDistance ? 'right' : 'left';
};

export default elevator;
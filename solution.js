export const drawSpider = (legType, bodyType, mouth, eye) => {
  const legTypes = {
    1: ['^', '^'],
    2: ['/\\', '/\\'],
    3: ['/╲', '╱\\'],
    4: ['╱╲', '╱╲']
  };

  const bodyTypes = {
    1: ['(', ')'],
    2: ['((', '))'],
    3: ['(((', ')))']
  };

  const totalEyes = Math.pow(2, bodyType);

  const eyes = eye.repeat(totalEyes/2);
  const body = bodyTypes[bodyType];
  const legs = legTypes[legType];


  return `${legs[0]}${body[0]}${eyes}${mouth}${eyes}${body[1]}${legs[1]}`;
};

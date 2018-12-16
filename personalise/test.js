import { personalise } from './solution';

describe('personalise', () => {
  test('returns correct result', () => {
    const person = {
      name: 'John',
      city: 'London',
      favourite_products: 'Books'
    };

    expect(
      personalise('Hello <NAME>, how is <CITY> today? <FAVOURITE PRODUCTS> are on sale today only <NAME>!', person))
      .toEqual('Hello John, how is London today? Books are on sale today only John!');
  });
});

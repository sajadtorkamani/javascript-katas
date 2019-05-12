import stripComments from './solution';

describe('stripComments', () => {
  test('correctly strips comments', () => {
    expect(
      stripComments('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!'])
    ).toEqual('apples, plums\npears\noranges');

    expect(
      stripComments('Q @b\nu\ne -e f g', ['@', '-'])
    ).toEqual('Q\nu\ne');
  });
});
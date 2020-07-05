import grabscrab from './solution'

describe('grabscrab', () => {
  // prettier-ignore
  test('returns correct result', () => {
    expect(grabscrab('trisf', ['first'])).toEqual(['first']);
    expect(grabscrab('oob', ['bob', 'baobab'])).toEqual([]);
    expect(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])).toEqual([ 'mountains' ]);
    expect(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])).toEqual([ 'pool', 'loop']);
    expect(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])).toEqual([ 'sport', 'ports' ]);
    expect(grabscrab('ourf', ['one', 'two', 'three'])).toEqual([]); 
  });
})

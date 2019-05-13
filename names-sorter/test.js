import namesSorter from './solution';

describe('namesSorter', () => {
  test('sorts names by length', () => {
    const input = [
      ['Juan', 'Ariel', 'Julia'],
      ['Brad', 'Michael', 'Alexander']
    ];
    const expectedOutput = ['Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander'];

    expect(namesSorter(input)).toEqual(expectedOutput);
  });
});
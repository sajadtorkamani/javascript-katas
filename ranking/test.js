import ranking from './solution';

describe('ranking', () => {
  test('returns correct result', () => {
    const input = [
      { name: "John", points: 100 },
      { name: "Bob", points: 130 },
      { name: "Mary", points: 120 },
      { name: "Kate", points: 120 }
    ];

    const output = [
      { name: "Bob", points: 130, position: 1 },
      { name: "Kate", points: 120, position: 2 },
      { name: "Mary", points: 120, position: 2 },
      { name: "John", points: 100, position: 4 }
    ];

    expect(ranking(input)).toEqual(output);
  });

  test('returns correct result', () => {
    const input = [
      { name: "Bob", points: 100 },
      { name: "Mary", points: 100 },
      { name: "John", points: 100 }
    ];

    const output = [
      { name: "Bob", points: 100, position: 1 },
      { name: "John", points: 100, position: 1 },
      { name: "Mary", points: 100, position: 1 }
    ];

    expect(ranking(input)).toEqual(output);
  });
});
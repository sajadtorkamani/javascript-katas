import findOddNames, { hasOddSum } from './solution';

describe('findOddNames', () => {
  test('returns correct result', () => {
    const list1 = [
      { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
      { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ];
    const answer1 = [
      { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ];

    expect(findOddNames(list1)).toEqual(answer1);


    const list2 = [
      { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' }
    ];
    const answer2 = [];

    expect(findOddNames(list2)).toEqual(answer2);
  });
});

describe('hasOddSum', () => {
  test('returns true if total sum of ASCII code of all chars is an odd number', () => {
    expect(hasOddSum('Abb')).toEqual(true); // 65 + 98 + 98 = 261
    expect(hasOddSum('Aba')).toEqual(false); // 65 + 98 + 97 = 260
  });
});
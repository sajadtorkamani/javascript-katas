import isAgeDiverse from './solution';

describe('isAgeDiverse', () => {
  test('returns correct result', () => {
    const list1 = [
      { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
      { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
      { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
      { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
      { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
      { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
      { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
      { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
    ];

    const list2 = [
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
      { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
    ];

    const list3 = [
      { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
      { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
      { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
      { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
    ];

    expect(isAgeDiverse(list1)).toEqual(true);
    // expect(isAgeDiverse(list2)).toEqual(false);
    // expect(isAgeDiverse(list3)).toEqual(false);
  });
});
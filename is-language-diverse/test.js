import isLanguageDiverse from './solution';

describe('isLanguageDiverse', () => {
  test('returns correct result', () => {
    const list1 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
      { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
      { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
      {
        firstName: 'Jayden',
        lastName: 'P.',
        country: 'Jamaica',
        continent: 'Americas',
        age: 18,
        language: 'JavaScript'
      },
      { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
    ];

    const list2 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
      { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
      {
        firstName: 'Jayden',
        lastName: 'P.',
        country: 'Jamaica',
        continent: 'Americas',
        age: 18,
        language: 'JavaScript'
      },
      { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
    ];

    const list3 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
      {
        firstName: 'Jayden',
        lastName: 'P.',
        country: 'Jamaica',
        continent: 'Americas',
        age: 18,
        language: 'JavaScript'
      },
      { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
    ];

    const list4 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
      { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
    ];

    const list5 = [
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'Ruby' },
      { language: 'JavaScript' },
      { language: 'JavaScript' },
      { language: 'JavaScript' },
      { language: 'JavaScript' },
      { language: 'JavaScript' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' },
      { language: 'Python' }
    ];

    expect(isLanguageDiverse(list1)).toEqual(false);
    expect(isLanguageDiverse(list2)).toEqual(false);
    expect(isLanguageDiverse(list3)).toEqual(true);
    expect(isLanguageDiverse(list4)).toEqual(true);
    expect(isLanguageDiverse(list5)).toEqual(true);
  });
});
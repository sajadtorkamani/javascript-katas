import autocorrect from './solution';

describe('autocorrect', () => {
  test('replaces all occurrences of "u" or "you" with "your sister"', () => {
    expect(autocorrect('foo youtube you u youuu YOU You'))
      .toEqual('foo youtube your sister your sister your sister your sister your sister');
  });
});
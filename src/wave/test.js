import wave, { replaceCharAt } from './solution'

describe('wave', () => {
  test('returns correct result', () => {
    // let result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
    // expect(wave('hello')).toEqual(result);
    //
    // result = ['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS'];
    // expect(wave('codewars')).toEqual(result);
    //
    // result = [];
    // expect(wave('')).toEqual(result);

    let result = [
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS'
    ]
    expect(wave('two words')).toEqual(result)
    //
    // result = [' Gap ', ' gAp ', ' gaP '];
    // expect(wave(' gap ')).toEqual(result);
  })
})

describe('replaceCharAt', () => {
  test('replaces char at given index', () => {
    expect(replaceCharAt('foo', 0, 'x')).toEqual('xoo')
    expect(replaceCharAt('foo', 1, 'x')).toEqual('fxo')
    expect(replaceCharAt('foo', 5, 'x')).toEqual('foo')
  })
})

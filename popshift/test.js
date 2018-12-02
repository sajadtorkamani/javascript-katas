import { popShift } from './solution';

describe('#popShift', () => {
  test('returns correct result', () => {
    expect(popShift('reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps')).toEqual(['spahrepswonkohwebyamdlroweht', 'reusetestcasesbitcointakeove', 'r']);
    expect(popShift('turnsoutrandomtestcasesareeasierthanwritingoutbasicones')).toEqual(['senocisabtuognitirwnahtreis', 'turnsoutrandomtestcasesaree', 'a']);
    expect(popShift('exampletesthere')).toEqual(['erehtse', 'example', 't']);
  });
});
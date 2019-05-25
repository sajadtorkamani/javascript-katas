import fizzBuzzCuckooClock from './solution';

describe('fizzBuzzCuckooClock', () => {
  test('returns correct result', () => {
    expect(fizzBuzzCuckooClock('21:00')).toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    expect(fizzBuzzCuckooClock('12:00')).toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    expect(fizzBuzzCuckooClock('14:30')).toEqual('Cuckoo');
    expect(fizzBuzzCuckooClock('11:15')).toEqual('Fizz Buzz');
    expect(fizzBuzzCuckooClock('08:55')).toEqual('Buzz');
    expect(fizzBuzzCuckooClock('03:03')).toEqual('Fizz');
    expect(fizzBuzzCuckooClock('00:00')).toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    expect(fizzBuzzCuckooClock('13:34')).toEqual('tick');
  });
});
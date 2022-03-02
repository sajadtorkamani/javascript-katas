import babySharkLyrics, { printChorus } from './solution'

describe('printChorus', () => {
  test('returns correct result', () => {
    // prettier-ignore
    const expected = "Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark!\n";

    expect(printChorus('Baby shark')).toEqual(expected)
  })
})

describe('babySharkLyrics', () => {
  test('returns correct result', () => {
    // prettier-ignore
    const expected = "Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark!\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark!\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark!\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark!\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark!\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt!\n\
Run away,…";

    expect(babySharkLyrics()).toEqual(expected)
  })

  test('is constructed with code that is shorter than 300 chars', () => {
    const length = printChorus.toString().length

    expect(length).toBeLessThan(300)
  })
})

import { tapCodeTranslation, translateChar } from './tapCodeTranslation'


describe('translateChar', () => {
  test('translates char to tap code', () => {
    expect(translateChar('t')).toEqual('.... ....')
    expect(translateChar('e')).toEqual('. .....')
    expect(translateChar('s')).toEqual('.... ...')
  }) 
})

describe('tapCodeTranslation', () => {
  test('translates input correctly', () => {
    expect(tapCodeTranslation('test')).toEqual(
      '.... .... . ..... .... ... .... ....'
    )
    // expect(tapCodeTranslation('total')).toEqual(
    //   '.... .... ... .... .... .... . . ... .'
    // )
    // expect(tapCodeTranslation('break')).toEqual(
    //   '. .. .... .. . ..... . . . ...'
    // )
    // expect(tapCodeTranslation('something')).toEqual(
    //   '.... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..'
    // )
    // expect(tapCodeTranslation('final')).toEqual(
    //   '.. . .. .... ... ... . . ... .'
    // )
  })
})

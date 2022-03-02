import { triangle, getColour } from './solution'

describe('#getColour', () => {
  test('returns correct result', () => {
    expect(getColour('RR')).toEqual('R')
    expect(getColour('GG')).toEqual('G')
    expect(getColour('BB')).toEqual('B')

    expect(getColour('RG')).toEqual('B')
    expect(getColour('GR')).toEqual('B')

    expect(getColour('GB')).toEqual('R')
    expect(getColour('BG')).toEqual('R')

    expect(getColour('RB')).toEqual('G')
    expect(getColour('BR')).toEqual('G')
  })
})

describe('#triangle', () => {
  test('returns correct result', () => {
    expect(triangle('GB')).toEqual('R')
    expect(triangle('RRR')).toEqual('R')
    expect(triangle('RGBG')).toEqual('B')
    expect(triangle('RBRGBRB')).toEqual('G')
    expect(triangle('RBRGBRBGGRRRBGBBBGG')).toEqual('G')
    expect(triangle('B')).toEqual('B')
  })
})

import { christmasTree } from './solution'

describe('christmasTree', () => {
  test('should return correct christmas tree for height 1', function() {
    expect(christmasTree(1)).toEqual('*')
  })
  test('should return correct christmas tree for height 2', function() {
    expect(christmasTree(2)).toEqual(' * \n***')
  })
  test('should return correct christmas tree for height 3', function() {
    expect(christmasTree(3)).toEqual('  *  \n *** \n*****')
  })
  test('should return correct christmas tree for height 4', function() {
    expect(christmasTree(4)).toEqual('   *   \n  ***  \n ***** \n*******')
  })
  test('should return correct christmas tree for height 5', function() {
    expect(christmasTree(5)).toEqual(
      '    *    \n   ***   \n  *****  \n ******* \n*********'
    )
  })
  test('should return correct christmas tree for height 6', function() {
    expect(christmasTree(6)).toEqual(
      '     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********'
    )
  })
  test('should return correct christmas tree for height 7', function() {
    expect(christmasTree(7)).toEqual(
      '      *      \n     ***     \n    *****    \n   *******   \n  *********  \n *********** \n*************'
    )
  })
  test('should return correct christmas tree for height 8', function() {
    expect(christmasTree(8)).toEqual(
      '       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************'
    )
  })
  test('should return correct christmas tree for height 9', function() {
    expect(christmasTree(9)).toEqual(
      '        *        \n       ***       \n      *****      \n     *******     \n    *********    \n   ***********   \n  *************  \n *************** \n*****************'
    )
  })
  test('should return correct christmas tree for height 10', function() {
    expect(christmasTree(10)).toEqual(
      '         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************'
    )
  })
})

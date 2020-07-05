import returnSpecifics from './solution'

describe('returnSpecifics', () => {
  test('returns correct result', () => {
    expect(
      returnSpecifics({
        a: 1,
        b: 2,
        c: 3,
        d: 'd',
        e: 'dsds',
        add: function(a, b) {
          return a + b
        },
        g: 34
      })
    ).toEqual([1, 2, 3, 34, 'add'])

    expect(
      returnSpecifics({
        a: 10,
        b: -20,
        c: true,
        d: 'd',
        e: 50,
        subtract: function(a, b) {
          return a - b
        },
        g: 100
      })
    ).toEqual([10, -20, 50, 100, 'subtract'])

    expect(returnSpecifics({})).toEqual(['The Object is Empty'])

    // //-- array expect({a:44456,b:999,c:true,d:'d',e:5094430,arr:[1,2,3],g:1980700}),[44456,999,5094430,1980700]);
    // //-- array expect({add:function(a,b){return a+b;},b:[3,5,6],c:true,d:'d',double:function(a){return
    // a*a},subtract:function(a,b){return a-b;},g:false}),['add','double','subtract']);   //-- array expect({}),["The
    // Object is Empty"]);   //-- array
  })
})

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [{ ss: '222', n: 3 }, { n: 2 }, { n: 1 }]

type Pop<T extends any[]> = T extends [...infer A, any] ? A: never

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
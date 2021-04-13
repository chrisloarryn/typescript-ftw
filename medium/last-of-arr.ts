type arr1Last = ['a', 'b', 'c']
type arr2Last = [3, 2, 1]

// type Last<T extends any[]> = [never, ...T][T['length']]
type Last<T extends any[]> = T extends [...infer _, infer U] ? U : never
// type Last<T extends any[]> = T extends [...any,infer P]? P :never

type tail1 = Last<arr1Last> // expected to be 'c'
type tail2 = Last<arr2Last> // expected to be 1
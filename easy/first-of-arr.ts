type arr1First = ['a', 'b', 'c']
type arr2First = [3, 2, 1]

type First<Type extends any[]> = Type extends [] ? never : Type[0]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

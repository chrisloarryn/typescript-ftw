// In this challenge, you would need to write a type that takes an
// array and emitted the flatten array type.

type Flatten<A extends any[]> =  A extends [infer a,...infer rest] ? a extends any[]?[...Flatten<a>,...Flatten<rest>]:[a,...Flatten<rest>]:[]

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]> // [1, 2, 3, 4, 5]


type myFirstArray = [1, 2, 3, 4, 5]
type mySecondArray = [[[6]]]

const myEntireArray: Concat<myFirstArray, mySecondArray>

const flattedArray: Flatten<typeof myEntireArray> // =  [1, 2, 3, 4, 5, 6]
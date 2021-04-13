type Arr = ['1', '2', '3']

// type TupleToUnion<T extends any[]> = T[number]
type TupleToUnion<T> = T extends any[] ? T[number] : never;


const a: TupleToUnion<Arr> // expected to be '1' | '2' | '3'
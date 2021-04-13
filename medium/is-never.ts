// Implement a type IsNever, which takes input type T.
// If the type of resolves to never, return true,
// otherwise false.

type IsNever<T> = [T] extends [never] ? true : false

type AAA = IsNever<never>  // expected to be true
type BBB = IsNever<undefined> // expected to be false
type CCC = IsNever<null> // expected to be false
type DDD = IsNever<[]> // expected to be false
type EEE = IsNever<number> // expected to be false
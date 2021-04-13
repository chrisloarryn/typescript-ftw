// Implement Python liked any function in the type system.
// A type takes the Array and returns true if any element of
// the Array is true.If the Array is empty, return false.

type Falsy<T> = T extends false | 0 | '' | []
  ? true
  : T extends Record<string, any>
  ? [keyof T] extends [never]
    ? true
    : false
  : false

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer L]
  ? Falsy<F> extends true
    ? AnyOf<L>
    : true
  : false

type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

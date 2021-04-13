// Implement a type, UnionToTuple, that converts a union to a
// tuple.

import { Equal } from '@type-challenges/utils'

// As we know, union is an unordered structure, but tuple is an
// ordered, which implies that we are not supposed to preassume
// any order will be preserved between terms of one union, when
// unions are created or transformed.

// Hence in this challenge, any permutation of the elements in
// the output tuple is acceptable.

// Your type should resolve to one of the following two types, but N
// OT a union of them!

/**
 * UnionToIntersection<{ foo: string } | { bar: string }> =
 *  { foo: string } & { bar: string }.
 */
type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never

/**
 * LastInUnion<1 | 2> = 2.
 */
type LastInUnion<U> = UnionToIntersection<
  U extends unknown ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never

/**
 * UnionToTuple<1 | 2> = [1, 2].
 */
type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last]

type UTT1 = UnionToTuple<1> // [1], and correct
type UTT2 = UnionToTuple<'any' | 'a'> // ['any','a'], and correct
// or

type UTT3 = UnionToTuple<'any' | 'a'> // ['a','any'], and correct
// It shouldn't be a union of all acceptable tuples...

type UTT4 = UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
// And a union could collapes, which means some types could absorb (or be absorbed by) others and there is no way to prevent this absorption. See the following examples:

type UTT5 = Equal<UnionToTuple<any | 'a'>, UnionToTuple<any>> // will always be a true
type UTT6 = Equal<UnionToTuple<unknown | 'a'>, UnionToTuple<unknown>> // will always be a true
type UTT7 = Equal<UnionToTuple<never | 'a'>, UnionToTuple<'a'>> // will always be a true
type UTT8 = Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>> // will always be a true

// asc order
// In this challenge, you are required to sort natural number arrays in either ascend order or descent order.
// Ascend order examples:
type Iterator<n, iterator extends any[] = []> = 
  iterator['length'] extends n 
    ? iterator
    : Iterator<n, [any, ...iterator]>

type Drop1<xs extends any[]> =
  xs extends [any, ...infer tail] ? tail : []

type LessThanOrEqual<a extends any[], b extends any[]> = 
  [a, b] extends [[], [any, ...any]] 
    ? true
    : [a, b] extends [[any,...any], []] 
    ? false
    : [a, b] extends [[], []] 
    ? true
    : LessThanOrEqual<Drop1<a>, Drop1<b>>

type GreaterThan<a extends any[], b extends any[]> = 
  [a, b] extends [[], [any, ...any]] 
    ? false
    : [a, b] extends [[any,...any], []] 
    ? true
    : [a, b] extends [[], []] 
    ? false
    : GreaterThan<Drop1<a>, Drop1<b>>


type FilterLessThanOrEqual<value, xs extends any[], output extends any[] = []> = 
  xs extends [infer head, ...infer tail]
    ? LessThanOrEqual<Iterator<value>, Iterator<head>> extends true
      ? [...output, head, ...FilterLessThanOrEqual<value, tail, output>]
      : [...output, ...FilterLessThanOrEqual<value, tail, output>]
    : []

type FilterGreaterThan<value, xs extends any[], output extends any[] = []> = 
  xs extends [infer head, ...infer tail]
    ? GreaterThan<Iterator<value>, Iterator<head>> extends true
      ? [...output, head, ...FilterGreaterThan<value, tail, output>]
      : [...output, ...FilterGreaterThan<value, tail, output>]
    : []

type Sort<xs extends any[], reversed extends boolean = false> = 
    xs extends [infer head, ...infer tail]
      ? reversed extends true
        ? [...Sort<FilterLessThanOrEqual<head, tail>, reversed>, head, ...Sort<FilterGreaterThan<head, tail>, reversed>]
        : [...Sort<FilterGreaterThan<head, tail>, reversed>, head, ...Sort<FilterLessThanOrEqual<head, tail>, reversed>]
      : []

Sort<[]> // []
Sort<[1]> // [1]
Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]> //  [2, 4, 5, 6, 6, 6, 7, 8, 9]


// The Sort type should also accept a boolean type. When it is true, the sorted result should be in descent order. Some examples:

Sort<[3, 2, 1], true> // [3, 2, 1]
Sort<[3, 2, 0, 1, 0, 0, 0], true> // [3, 2, 1, 0, 0, 0, 0]
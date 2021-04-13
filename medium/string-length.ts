// Compute the length of a string literal, which behaves like
// String#length.

type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer L}`
  ? LengthOfString<L, [...T, F]>
  : T['length']

// type toArray<S extends string> = S extends `${infer L}${infer R}` ? [L, ...toArray<R>] : [];
// type LengthOfString<S extends string> = toArray<S>['length'];

const stranger: LengthOfString<'for', []> = 3
// Implement CapitalizeWords<T> which converts the first letter
// of each word of a string to uppercase and leaves the rest
// as - is.
type CapitalizeWordsX<S extends string> = S extends `${infer L}${infer R}`
  ? L extends [' ', '.', ','][number]
    ? `${L}${CapitalizeWordsX<Capitalize<R>>}`
    : `${L}${CapitalizeWordsX<R>}`
  : S

type CapitalizeWords<S extends string> = Capitalize<CapitalizeWordsX<S>>

type capitalizedWords = CapitalizeWords<'hello world'> // expected to be 'Hello World, My Friends'

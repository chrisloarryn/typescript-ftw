// Implement a type FilterOut<T, F> that filters out items of the
// given type F from the tuple T.

// For example,
type FilterOut<T extends any[], F, Result extends any[] = []> =
  T extends [infer Head, ...infer Tail]
    ? [Head] extends [F] ? FilterOut<Tail, F, Result> : FilterOut<Tail, F, [...Result, Head]>
    : Result

type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
// Implement the advanced util type RequiredKeys<T>,
// which picks all the required keys into a union.

type RequiredKeysExtreme<T, K = keyof T> = K extends keyof T
  ? T[K] extends Required<T>[K]
    ? K
    : never
  : never

type ResultRequiredKeys = RequiredKeysExtreme<{ foo: number; bar?: string }>
// expected to be “foo”

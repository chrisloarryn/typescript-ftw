// Implement the advanced util type OptionalKeys<T>,
// which picks all the optional keys into a union.

type OptionalKeysEx<T, K = keyof T> = K extends keyof T
  ? T[K] extends Required<T>[K]
    ? never
    : K
  : never

type IGetOptionalEx = OptionalKeysEx<{ foo: number; bar?: string }> // expected to be { bar?: string }

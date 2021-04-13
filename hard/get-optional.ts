// Implement the advanced util type GetOptional<T>,
// which remains all the optional fields
type OptionalKeys<T, P = keyof T> = P extends keyof T ? T[P] extends Required<T>[P] ? never : P : never;

type MyPickGetOptional<T, K extends keyof T> = {
  [P in K]: T[P]
}

type GetOptional<T> = MyPickGetOptional<T, OptionalKeys<T>>
type IGetOptional = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }

// don't work

type CamelCaseZ<S> = S extends `${infer H}_${infer T}`
  ? `${H}${CamelCaseZ<Capitalize<T>>}`
  : S


type Camelize<T> = {
  [P in keyof T as CamelCaseZ<P>]: T[P] extends object ? Camelize<T[P]> : T[P]
}

type CamelStr = Camelize<'hello world'> // expected to be helloWorld
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`

type TestAbsolute = -100
type ResultAbsolute = Absolute<TestAbsolute> // expected to be "100"

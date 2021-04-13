type Empty = ' ' | '\t' | '\n'

type TrimLeftTrim<S extends string> = S extends `${Empty}${infer R}` ? TrimLeftTrim<R> : S
type TrimRightTrim<S extends string> = S extends `${infer R}${Empty}` ? TrimRightTrim<R> : S

type Trim<S extends string> = TrimLeft<TrimRightTrim<S>>

type trimedTrim = Trim<'  Hello World  '> // expected to be 'Hello World'

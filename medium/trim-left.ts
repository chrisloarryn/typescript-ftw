type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${infer L}${infer R}` ? L extends Space ? TrimLeft<R> : `${L}${R}` : S;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

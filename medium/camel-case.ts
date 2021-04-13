// for-bar-baz -> forBarBaz


// type CamelCase<S extends string> = S extends `${infer head}-${infer K}${infer tail}` ? CamelCase<`${head}${Uppercase<K>}${tail}`> : S;

type CamelCase<S> = S extends `${infer S1}-${infer S2}`
  ? S2 extends Capitalize<S2> 
    ? `${S1}-${CamelCase<S2>}`
    : `${S1}${CamelCase<Capitalize<S2>>}`
  : S

const text: CamelCase<'for-bar-baz'> = 'forBarBaz'
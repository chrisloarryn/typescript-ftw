type CapitalizeCap<S extends string> = S extends `${infer first}${infer rest}` ? `${Uppercase<first>}${rest}`:S

type capitalized = CapitalizeCap<'hello world'> // expected to be 'Hello world'

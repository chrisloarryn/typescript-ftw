// Implement CamelCase<T> which converts snake_case string to
// camelCase.

// type CamelCaseX<S extends string> =
//   S extends `${infer L}${infer R}`
//   ? L extends '_'
//     ? `${Capitalize<CamelCaseX<R>>}`
//     : `${L}${CamelCaseX<R>}`
//   : ''
// type CamelCaseC<S extends string> = CamelCaseX<Lowercase<S>>

// type CamelCaseC<S extends string> = S extends Lowercase<S>
//   ? S extends `${infer F}_${infer RF}${infer R}`
//     ? `${F}${Uppercase<RF>}${CamelCase<R>}`
//     : S
//   : CamelCase<Lowercase<S>>;

type CamelCaseC<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

type camelCase1 = CamelCaseC<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCaseC<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
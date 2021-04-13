// Convert a string literal to a number, which behaves
// like Number.parseInt.

type ToNumber<S extends string, T extends any[] = []> = S extends `${T["length"]}`
  ? T["length"]
  : ToNumber<S, [...T, any]>

// type ToNumber<
//   S extends string,
//   T extends any[] = []
// > = S extends `${T['length']}` ? T['length'] : ToNumber<S, [...T, '']>

type StrToNum2 = ToNumber<'1'> // expected to be

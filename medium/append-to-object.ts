// Implement a type that adds a new field to the interface.
// The type takes the three arguments.The output should be an
// object with the new field

type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

type Test = { id: '1' }
type ResultAppendToObject = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

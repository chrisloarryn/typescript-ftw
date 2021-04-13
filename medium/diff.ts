// Get an Object that is the difference between O & O1

// type KeyDiff<O, O1> = Exclude<keyof O | keyof O1, keyof O & keyof O1>
// type Diff<O, O1> = {
//   [Key in KeyDiff<O, O1>]: Key extends keyof O
//     ? O[Key]
//     : Key extends keyof O1
//     ? O1[Key]
//     : never
// }

type Diff<O, O1> = {
  [K in (Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>)]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}

type obj1 = {
  name: 'aaa'
}

type obj2 = {
  age: 12
}

type TypeDiff = Diff<obj1, obj2>
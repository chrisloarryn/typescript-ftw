// The enum is an original syntax of TypeScript 
// (it does not exist in JavaScript).So it is converted to 
// like the following form as a result of transpilation:

// let OperatingSystem;
// (function (OperatingSystem) {
//     OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
//     OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
//     OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
// })(OperatingSystem || (OperatingSystem = {}));

// In this question, the type should convert a given string tuple to an object that behaves like an enum. Moreover, the property of an enum is preferably a pascal case.

type Enum<T extends readonly string[], N extends boolean = false> =  {
  readonly [Key in T[number] as Capitalize<Key>]: N extends false ?  Key : IndexOf<T, Key>
}

type IndexOf<Arr extends readonly string[], T extends string, Passed extends any[] = []> =
  Arr[Passed['length']] extends T ? Passed['length'] : IndexOf<Arr, T, [...Passed, 1]>

type Enum1 = Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }

// If true is given in the second argument, the value should be a number literal.

type enum2 = Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
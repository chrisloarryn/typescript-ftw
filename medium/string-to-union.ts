// Implement the String to Union type.
// Type take string argument.
// The output should be a union of input letters
type StringToUnion<
  T extends string,
  U = never
> = T extends `${infer Single}${infer Rest}`
  ? StringToUnion<Rest, U | Single>
  : U

type TestStringToUnion = '123'
type ResultStringToUnion = StringToUnion<TestStringToUnion> // expected to be "1" | "2" | "3"

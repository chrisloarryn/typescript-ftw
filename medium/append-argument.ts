type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer AA
) => infer T
  ? (...args: [...AA, A]) => T
  : never

type Fn = (a: number, b: string) => number

type ResultAppendArgument = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number

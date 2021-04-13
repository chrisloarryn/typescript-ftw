// Currying is the technique of converting a function that
// takes multiple arguments into a sequence of functions that
// each take a single argument.
type Curry<F> = F extends (...args: infer A) => infer R
  ? A extends [infer Head, ...infer Tail]
    ? (arg: Head) => Curry<(...arg: Tail) => R>
    : ReturnType<F>
  : never

declare function Currying<F>(fn: F): Curry<F>

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)

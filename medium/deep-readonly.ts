type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type DeepReadonly<T> = { readonly [ P in keyof T ]: T[P] extends Function ? T[P] : DeepReadonly<T[P]> }

const todoDeepReadonly: DeepReadonly<X> = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}
// should be same as `Expected`

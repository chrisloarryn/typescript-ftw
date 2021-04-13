// The get function in lodash is a quite convenient helper for 
// accessing nested values in JavaScript.However, when we come
// to TypeScript, using functions like this will make you lose 
// the type information.With TS 4.1's upcoming Template Literal 
// Types feature, properly typing get becomes possible.
// Can you implement it ?

// For example,

type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}

type Get<T, K extends string> =
  K extends `${infer P}.${infer R}`
    ? P extends keyof T ? Get<T[P], R> : never
    : K extends keyof T ? T[K] : never
  
type AGet = Get<Data, 'hello'> // 'world'
type BGet = Get<Data, 'foo.bar.count'> // 6
type CGet = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
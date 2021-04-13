// Implement a generic GetReadonlyKeys<T> that returns
// a union of the readonly keys of an Object.

import { Equal } from "@type-challenges/utils"

// For example

interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type NoNever<T> = {
  [key in keyof T as T[key] extends never ? never : key]: T[key]
}

type MarkNever<T> = {
  [key in keyof T]-?: Equal<{ -readonly [x in key]: T[x] }, { [x in key]: T[x] }> extends false ? T[key] : never
}

type GetReadonlyKeys<T> = keyof NoNever<MarkNever<T>>

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
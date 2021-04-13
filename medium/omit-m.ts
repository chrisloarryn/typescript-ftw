interface TodoMedium {
  title: string
  description: string
  completed: boolean
}

// type MyOmitMedium<T, K> = {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }

// type MyExclude<T, K> = T extends K ? never : T;

// type MyOmit<T, K extends keyof T> = {
//   [R in MyExclude<keyof T, K>]: T[R]
// }

type MyOmitMedium<T, K> = {
  [P in Exclude<keyof T, K>]: T[P]
}

type TodoPreviewMedium = MyOmitMedium<TodoMedium, 'description' | 'title'>

const todoMedium: TodoPreviewMedium = {
  completed: false
}

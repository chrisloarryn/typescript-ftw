interface TodoReadonlyM {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
  Omit<T, K>

const todo: MyReadonly2<TodoReadonlyM, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK

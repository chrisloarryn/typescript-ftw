interface TodoPick {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = { [k in K]: T[k] }

type TodoPreview = MyPick<TodoPick, 'title' | 'completed'>

const todoPick: TodoPreview = {
  title: 'Clean room',
  completed: false
}

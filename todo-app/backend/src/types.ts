export interface Message {
  user: string
  message: string
}

export interface Todo {
  id: number
  done: boolean
  message: string
}

export type NewTodo = Pick<Todo, 'message'>

export type UnsavedTodo = Omit<Todo, 'id'>

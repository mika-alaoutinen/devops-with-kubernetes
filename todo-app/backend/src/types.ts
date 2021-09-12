export interface Todo {
  id: number
  done: boolean
  message: string
}

export type NewTodo = Omit<Todo, 'id'>

// NATS types
export type Subject = 'TODO_ADDED' | 'TODO_UPDATED';

export interface Message {
  user: string
  message: string
};

// Todo types used within the applications
export interface Todo {
  id: number
  done: boolean
  message: string
};

export type NewTodo = Pick<Todo, 'message'>;

export type UnsavedTodo = Omit<Todo, 'id'>;

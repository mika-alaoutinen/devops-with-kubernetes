import queries from '../db/queries';
import { NewTodo, Todo, UnsavedTodo } from '../types';

const isTodoValid = ({ message }: NewTodo): boolean => message.length <= 140;

const fetchAllTodos = async (): Promise<Todo[]> => queries.getAllTodos();

const saveTodo = async (newTodo: NewTodo): Promise<Todo | string> => {
  const todo: UnsavedTodo = {
    done: false,
    message: newTodo.message,
  };

  return isTodoValid(todo)
    ? queries.saveTodo(todo)
    : 'Invalid todo! Message is too long.';
};

const updateTodo = async (id: number, updatedTodo: Todo): Promise<Todo | string> => {
  const todoExists = await queries.existsById(id);
  if (!todoExists) {
    return `Error updating todo! No Todo exists with id ${id}`;
  }

  const todo: Todo = {
    ...updatedTodo,
    id,
  };

  return isTodoValid(todo)
    ? queries.updateTodo(todo)
    : 'Invalid todo! Message is too long.';
};

export default { fetchAllTodos, saveTodo, updateTodo };

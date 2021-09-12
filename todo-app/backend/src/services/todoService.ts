import queries from '../db/queries';
import { NewTodo, Todo } from '../types';

const isTodoValid = ({ message }: NewTodo): boolean => message.length <= 140;

const fetchAllTodos = async (): Promise<Todo[]> => queries.getAllTodos();

const saveTodo = async (newTodo: NewTodo): Promise<Todo | string> => {
  const todo: NewTodo = {
    done: false,
    message: newTodo.message,
  };

  return isTodoValid(todo)
    ? queries.saveTodo(todo)
    : 'Invalid todo! Message is too long.';
};

export default { fetchAllTodos, saveTodo };

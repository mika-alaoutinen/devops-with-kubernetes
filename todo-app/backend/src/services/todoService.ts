import queries from '../db/queries';
import nats from '../messaging/nats';
import { NewTodo, Todo, UnsavedTodo } from '../types';

const isTodoValid = ({ message }: NewTodo): boolean => message.length <= 140;

const fetchAllTodos = async (): Promise<Todo[]> => queries.getAllTodos();

const saveTodo = async (newTodo: NewTodo): Promise<Todo | string> => {
  const todo: UnsavedTodo = {
    done: false,
    message: newTodo.message,
  };

  if (!isTodoValid(todo)) {
    return 'Invalid todo! Message is too long.';
  }

  const persisted = await queries.saveTodo(todo);
  nats.writeMessage('TODO_ADDED', persisted);

  return persisted;
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

  if (!isTodoValid(todo)) {
    return 'Invalid todo! Message is too long.';
  }

  const persisted = await queries.updateTodo(todo);
  nats.writeMessage('TODO_UPDATED', persisted);

  return persisted;
};

export default { fetchAllTodos, saveTodo, updateTodo };

import queries from '../db/queries';
import { Todo } from '../types';

const isTodoValid = ({ message }: Todo): boolean => message.length <= 140;

const fetchAllTodos = async (): Promise<Todo[]> => queries.getAllTodos();

const saveTodo = async (todo: Todo): Promise<Todo | string> => (isTodoValid(todo)
  ? queries.saveTodo(todo)
  : 'Invalid todo! Message is too long.');

export default { fetchAllTodos, saveTodo };

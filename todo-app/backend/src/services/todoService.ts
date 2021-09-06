import queries from '../db/queries';
import { Todo } from '../types';

const fetchAllTodos = async (): Promise<Todo[]> => queries.getAllTodos();

const saveTodo = async (todo: Todo): Promise<Todo> => queries.saveTodo(todo);

export default { fetchAllTodos, saveTodo };

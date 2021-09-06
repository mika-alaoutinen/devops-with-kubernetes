import client from './pool';
import { Todo } from '../types';

const getAllTodos = async (): Promise<Todo[]> => {
  const sql = 'SELECT * FROM todos';

  try {
    return (await client.query(sql)).rows;
  } catch (error) {
    console.error('error fetching all todos', error);
    throw error;
  }
};

const saveTodo = async ({ message }: Todo): Promise<Todo> => {
  const sql = 'INSERT INTO todos (message) VALUES ($1) RETURNING *';

  try {
    const response = await client.query(sql, [message]);
    return response.rows[0];
  } catch (error) {
    console.error('error saving a todo', error);
    throw error;
  }
};

export default { getAllTodos, saveTodo };

import client from './pool';
import { NewTodo, Todo } from '../types';

const existsById = async (id: number): Promise<boolean> => {
  const sql = 'SELECT id FROM todos WHERE id = ($1)';

  try {
    const { rows } = await client.query(sql, [id]);
    return rows.length === 1 && rows[0].id === id;
  } catch (error) {
    console.error(`could not find todo with id, ${id}`);
    throw error;
  }
};

const getAllTodos = async (): Promise<Todo[]> => {
  const sql = 'SELECT * FROM todos';

  try {
    return (await client.query(sql)).rows;
  } catch (error) {
    console.error('error fetching all todos', error);
    throw error;
  }
};

const saveTodo = async ({ message }: NewTodo): Promise<Todo> => {
  const sql = `INSERT INTO
    todos (done, message)
    VALUES (false, ($1))
    RETURNING *`;

  try {
    const { rows } = await client.query(sql, [message]);
    return rows[0];
  } catch (error) {
    console.error('error saving a todo', error);
    throw error;
  }
};

const updateTodo = async ({ id, done, message }: Todo): Promise<Todo> => {
  const sql = `UPDATE todos
    SET done = ($2), message = ($3)
    WHERE id = ($1)
    RETURNING *`;

  try {
    const { rows } = await client.query(sql, [id, done, message]);
    return rows[0];
  } catch (error) {
    console.error('error updating a todo', error);
    throw error;
  }
};

export default {
  existsById, getAllTodos, saveTodo, updateTodo,
};

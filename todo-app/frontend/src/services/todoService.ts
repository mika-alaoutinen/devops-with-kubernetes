import axios from 'axios';
import { backendUrl } from '@/environment';
import { NewTodo, Todo } from '../../../todo-types';

const todosUrl = `${backendUrl}/todos`;

const fetchAllTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axios.get(todosUrl);
    return response.data;
  } catch (error) {
    console.log('error fetching all todos', error);
    return Promise.resolve([]);
  }
};

const saveTodo = async (todo: NewTodo): Promise<Todo | string> => {
  try {
    const response = await axios.post(todosUrl, todo);
    return response.data;
  } catch (error) {
    console.log('error saving todo', error);
    return 'could not save todo';
  }
};

const updateDone = async (todo: Todo): Promise<Todo | string> => {
  const updated = {
    ...todo,
    done: !todo.done,
  };

  try {
    const response = await axios.put(`${todosUrl}/${todo.id}`, updated);
    return response.data;
  } catch (error) {
    console.log('error updating todo', error);
    return 'could not update todo';
  }
};

export default { fetchAllTodos, saveTodo, updateDone };

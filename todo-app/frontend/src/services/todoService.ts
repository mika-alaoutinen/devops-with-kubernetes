import axios from 'axios';
import { backendUrl } from '@/environment';
import { Todo } from '@/types';

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

const saveTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response = await axios.post(todosUrl, todo);
    return response.data;
  } catch (error) {
    console.log('error saving todo', error);
    return Promise.resolve(todo);
  }
};

export default { fetchAllTodos, saveTodo };

import { Todo } from '../types';

const todos: Todo[] = [
  { message: 'Todo note 1' },
  { message: 'Todo note 2' },
];

const fetchAllTodos = (): Todo[] => todos;

const saveTodo = (todo: Todo): Todo => {
  todos.push(todo);
  return todo;
};

export default { fetchAllTodos, saveTodo };

import express from 'express';
import { Todo } from '../types';
import service from '../services/todoService';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const todos = await service.fetchAllTodos();
    res.send(todos);
  } catch (e) {
    res.send(`Error fetching all todos ${e}`);
  }
});

router.post('/', async (_req, res) => {
  try {
    const newTodo: Todo = _req.body;
    const result = await service.saveTodo(newTodo);
    res.json(result);
  } catch (e) {
    res.send(`Error saving a new todo ${e}`);
  }
});

export default router;

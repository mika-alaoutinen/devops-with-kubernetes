import express from 'express';
import { Todo } from '../types';
import service from '../services/todoService';

const router = express.Router();

router.get('/', (_req, res) => {
  try {
    const todos = service.fetchAllTodos();
    res.send(todos);
  } catch (e) {
    const errorMsg = `Error fetching all todos ${e}`;
    console.log(errorMsg);
    res.send(errorMsg);
  }
});

router.post('/', (_req, res) => {
  try {
    const newTodo: Todo = _req.body;
    const saved = service.saveTodo(newTodo);
    res.json(saved);
  } catch (e) {
    const errorMsg = `Error saving a new todo ${e}`;
    console.log(errorMsg);
    res.send(errorMsg);
  }
});

export default router;

import express, { Response } from 'express';
import { Todo } from '../../../todo-types';
import service from '../services/todoService';

const router = express.Router();

router.get('/', async (_req, res: Response<Todo[] | string>) => {
  try {
    const todos = await service.fetchAllTodos();
    res.send(todos);
  } catch (e) {
    res.send(`Error fetching all todos ${e}`);
  }
});

router.post('/', async (req, res: Response<Todo | string>) => {
  try {
    const result = await service.saveTodo(req.body);
    res.json(result);
  } catch (e) {
    res.send(`Error saving a new todo ${e}`);
  }
});

router.put('/:id', async (req, res: Response<Todo | string>) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await service.updateTodo(id, req.body);
    res.json(updated);
  } catch (e) {
    res.send(`Error updating a todo ${e}`);
  }
});

export default router;

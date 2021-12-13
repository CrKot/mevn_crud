import express from 'express';

import TaskController from '../controllers/index.mjs';

const Controller = new TaskController();

const router = express.Router();

router.get('/', Controller.getTasks);
router.post('/', Controller.addTask);
router.patch('/:id/edit', Controller.editTask);
router.delete('/:id', Controller.deleteTask);
router.delete('/delete/all', Controller.deleteAll);

export default router;

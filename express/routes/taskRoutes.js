import express from 'express';
import verifyToken from '../authMidleware.js'
import {
  getAllTasks,
  getTasksWithUsers,
  getTaskActs,
  getLogs,
} from '../services/taskService.js';

const router = express.Router();

router.get('/tasks', verifyToken, getTasksWithUsers);
router.get('/task', verifyToken, getAllTasks)
router.get('/act_task', verifyToken, getTaskActs)
router.get('/logs', verifyToken, getLogs)

export default router;

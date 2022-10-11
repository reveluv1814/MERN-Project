import { Router } from "express";
import {auth} from '../middleware/auth.js'
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  getToken
} from "../controllers/task.controllers.js";

const router = Router();

router.get('/token',getToken);

router.get("/tasks",auth, getTasks);

router.get("/tasks/:id",auth, getTask);

router.post("/tasks",auth, createTask);

router.put("/tasks/:id",auth, updateTask);

router.delete("/tasks/:id",auth, deleteTask);

export default router;

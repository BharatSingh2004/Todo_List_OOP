import { ToDoService } from "../service/todo.service";
import { Router } from "express";

const router = Router();
const todoservice = new ToDoService();
router.get("/task",todoservice.getTask)
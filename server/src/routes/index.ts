import { Router } from "express"
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router()

// Create
router.post("/todo", addTodo)

// Read List
router.get("/todo", getTodos)

// Read Single
router.get("/todo/:id", getTodo)

// Update
router.put("/todo/:id", updateTodo)

// Delete
router.delete("/todo/:id", deleteTodo)

export default router
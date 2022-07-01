import { Response, Request } from 'express'
import { Todo } from '../../types/todo'
import TodoModel from '../../models/todo'

const getTodo =async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
        } = req
        const todo: Todo | null = await TodoModel.findById(id)
        res.status(200).json({ todo })
    } catch (error) {
        throw error
    }  
}

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: Todo[] = await TodoModel.find()
        res.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("body", JSON.stringify(req.body))
        const body = req.body as Pick<Todo, 'name' | 'description' | 'completed'>
  
        const todo: Todo = new TodoModel({
            name: body.name,
            description: body.description,
            completed: body.completed,
        }) 

        const newTodo: Todo = await todo.save()
        const allTodos: Todo[] = await TodoModel.find()

        res.status(201).json({ message: 'Todo added', todo: newTodo, todos: allTodos })
    } catch (error) {
        throw error
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: Todo | null = await TodoModel.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTodos: Todo[] = await TodoModel.find()
        res.status(200).json({
            message: 'Todo updated',
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: Todo | null = await TodoModel.findByIdAndRemove(
            req.params.id
        )
        const allTodos: Todo[] = await TodoModel.find()
        res.status(200).json({
            message: 'Todo deleted',
            todo: deletedTodo,
            todos:allTodos,
        })
    } catch (error) {
        throw error
    }
}

export { getTodos, getTodo, addTodo, updateTodo, deleteTodo }
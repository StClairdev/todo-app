interface Todo {
    _id: string
    name: string
    description: string
    completed: boolean
    createdAt?: string
    updatedAt?: string
}

interface TodoProps {
    todo: Todo
}

interface ApiDataType {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}
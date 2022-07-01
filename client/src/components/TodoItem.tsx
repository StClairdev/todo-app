import React from "react"

interface Props extends TodoProps {
    updateTodo: (todo:Todo) => void
    deleteTodo: (_id: string) => void
}

const Todo = ({ todo, updateTodo, deleteTodo }: Props) => {
    const checkTodo: string = todo.completed ? `line-through` : ""
    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{todo.name}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <div className="Card--button">
                <button
                   onClick={() => updateTodo(todo)}
                   className={todo.completed ? `hide-button` : "Card--button__done"}
                >
                   Complete 
                </button>
                <button
                   onClick={() => deleteTodo(todo._id)}
                   className="Card--button__delete"
                >
                   Delete
                </button>   
            </div>
        </div>
    )
}

export default Todo
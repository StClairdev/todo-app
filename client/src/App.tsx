import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";
import { FaPlusCircle, FaRegGrinWink } from "react-icons/fa";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showForm, setShowForm] = useState<Boolean>(false);

  const toggleForm = () => setShowForm(!showForm);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: Todo[] | any) => {
        if (todos) setTodos(todos);
      })
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (e: React.FormEvent, formData: Todo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        } else {
          toggleForm();
          if (data.todos) setTodos(data.todos);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo: Todo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        if (data.todos) setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        if (data.todos) setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const allComplete = todos.every((todo) => todo.completed) && todos.length > 0;

  return (
    <main className="App">
      <h1>Todos</h1>
      <div className="action-container">
        <FaPlusCircle color="#2A9D8F" size={40} onClick={toggleForm} />
      </div>
      {showForm && (
        <AddTodo saveTodo={handleSaveTodo} toggleForm={toggleForm} />
      )}
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
      {allComplete && (
        <div className="completed-message">
          <FaRegGrinWink size={60} />
          <div>Congrats!</div>
        </div>
      )}
    </main>
  );
};
export default App;

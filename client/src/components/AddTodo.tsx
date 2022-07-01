import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

interface Props {
  saveTodo: (e: React.FormEvent, formData: Todo | any) => void;
  toggleForm: () => void
}

const AddTodo = ({ saveTodo, toggleForm }: Props) => {
  const [formData, setFormData] = useState<Todo | {}>();

  const handleForm = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div className="action-container">
        <FaTimesCircle  size={40} onClick={toggleForm}/>
      </div>
      <div>
        <div>
          <label htmlFor="name">Todo Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea onChange={handleForm} id="description" rows={6} />
        </div>
      </div>
      <div>
        <button disabled={!formData ? true : false}>Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;

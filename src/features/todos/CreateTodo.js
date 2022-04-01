import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.entities);

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(todoAdded(text));
  }

  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text} />
        </p>
        <input type="submit" />
      </form>
      <p>Form Text: {text}</p>
    </div>
  );
}

export default CreateTodo;

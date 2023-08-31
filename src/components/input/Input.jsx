import React, { useContext, useState } from "react";
import "./Input.css";
import TodoContext from "../../context/TodoContext";

const Input = () => {
  const {addTodoItem}= useContext(TodoContext)
  const [inputValue, setInputValue] = useState("");
  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      addTodoItem(inputValue);
    }
    setInputValue("");
  };
  return (
    <div className="input-container">
      <div className="input-icon"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={inputValue}
          placeholder="Create a new todo..."
          onChange={handleInputValueChange}
        />
      </form>
    </div>
  );
};

export default Input;

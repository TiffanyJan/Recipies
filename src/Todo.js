import React from "react";

export default function Todo(props) {
  function checkedBox() {
    props.setTodos((prevTodos) => {
      prevTodos.find((prevTodo) => prevTodo.id == props.todo.id).complete = true;
      
      return prevTodos
    });
  }

  return (
    <div>
      <label>
        <input
          className="checkbox"
          type="checkbox"
          onChange={checkedBox}
        ></input>
        {props.todo.name}
      </label>
    </div>
  );
}

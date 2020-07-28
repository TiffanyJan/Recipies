import React from "react";

export default function Todo(props) {
  return (
    <div>
      <label>
        <input
          className="checkbox"
          type="checkbox"
          onChange={props.todo.complete}
        ></input>
        {props.todo.name}
      </label>
    </div>
  );
}

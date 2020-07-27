import React from "react";

export default function Todo(props) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={props.todo.complete}></input>
        {props.todo.name}
      </label>
    </div>
  );
}

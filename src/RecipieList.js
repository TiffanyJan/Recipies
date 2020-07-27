import React from "react";
import Todo from "./Todo";

export default function RecipieList(props) {
  return props.todos.map((todo) => <Todo key = {todo.id} todo={todo} />);
}

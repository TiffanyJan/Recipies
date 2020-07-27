import React, { useState, useRef } from "react";
import RecipieList from "./RecipieList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos,
        { id: todos.length + 1, name: name, complete: false },
      ];
    });
    if (name == "") return;
    todoNameRef.current.value = null;
  }

  return (
    <>
      <RecipieList todos={todos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Tasks</button>
      <button>Clear Tasks</button>
      <div>Tasks Left:</div>
    </>
  );
}

export default App;

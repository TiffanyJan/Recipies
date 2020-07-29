import React, { useState, useRef, useEffect } from "react";
import RecipieList from "./RecipieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: todos.length + 1, name: name, complete: false },
      ];
    });
    if (name == "") return;
    todoNameRef.current.value = null;
  }

  function clearTodo() {
    console.log(todos);

    const filterTodos = todos.filter((todo) => todo.complete == false);

    setTodos(filterTodos);
  }

  return (
    <>
      <RecipieList todos={todos} setTodos={setTodos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Tasks</button>
      <button onClick={clearTodo}>Clear Tasks</button>
      <div>Tasks Left:</div>
    </>
  );
}

export default App;

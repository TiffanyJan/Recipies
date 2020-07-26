import React, { useState } from "react";
import RecipieList from "./RecipieList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  return (
    <>
      <RecipieList todos={todos} />
      <input type="text"></input>
      <button>Add Tasks</button>
      <button>Clear Tasks</button>
      <div>Tasks Left:</div>
    </>
  );
}

export default App;

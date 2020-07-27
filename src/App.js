import React, { useState } from "react";
import RecipieList from "./RecipieList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "madusha", complete: false },
    { id: 2, name: "tiff", complete: true },
  ]);

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

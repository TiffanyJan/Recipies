import React from "react";
import RecipieList from "./RecipieList";

import "./App.css";

function App() {
  return (
    <>
      <RecipieList />
      <input type="text"></input>
      <button>Add Tasks</button>
      <button>Clear Tasks</button>
      <div>Tasks Left:</div>
    </>
  );
}

export default App;

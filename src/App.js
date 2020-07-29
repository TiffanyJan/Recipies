import React, { useState, useRef,  } from "react";
import RecipieList from "./RecipieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const recipies = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 }
  ]
  


  return (
    <>
     <Navbar className="color-nav" variant="light">
    <Navbar.Brand href="#home">Recipies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">New Recipies</Nav.Link>
      <Nav.Link href="#pricing">Popular Recipies</Nav.Link>
    </Nav>
  </Navbar>
 
      <RecipieList todos={todos} setTodos={setTodos} />
      <input ref={todoNameRef} type="text" className = "inputBox" options = {recipies}></input>
    </>
  );
}

export default App;

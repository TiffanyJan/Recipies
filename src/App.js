import React, { useState, useRef } from "react";
import RecipieList from "./RecipieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import pastaImg from "./caponata-pasta_1.jpg";
import chickenImg from "./chicken-thighs.png";
import vegImg from "./veg-bake.jpg";
import fishImg from "./fish.jpeg";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const [poplularRecipies, setPopularRecipies] = useState([
    { name: "Pasta Bake", image: pastaImg },
    { name: "Rosemary One Pan Chicken Skillet", image: chickenImg },
    { name: "Vegetable Bake", image: vegImg },
    { name: "Parmesan Fish Crust Bake", image: fishImg },
  ]);

  return (
    <>
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href="#home">Recipies</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#new-recipies">New Recipies</Nav.Link>
          <Nav.Link href="#popular-recipies">Popular Recipies</Nav.Link>
        </Nav>
      </Navbar>

      <div className="heading">
        <h1>Popular Recipies of The Week</h1>
      </div>
      <div className="row mt-2" >
        {poplularRecipies.map((recipies) => (
          <div key={recipies.name} style={{ margin: "0 auto" }}>
            <div className="row mt-2" >{recipies.name}</div>
            <div className="row mt-2">
            <img
              className="card-img-top"
              src={recipies.image}
              alt="Image"
              style={{ width: "15rem", margin: "0 auto" }}
            ></img>
            </div>
          </div>
        ))}
      </div>

      <RecipieList todos={todos} setTodos={setTodos} />
      <div className="row mt-2" align="center"></div>
      <div className="container">
        <div className="row mt-3">
          <Form inline className="text-center">
            <FormControl
              type="text"
              placeholder="Search"
              style={{ width: "650px" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default App;

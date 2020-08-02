import React, { useState, useRef } from "react";
import RecipieList from "./RecipieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button, Row } from "react-bootstrap";
import "./App.css";
import pastaImg from "./caponata-pasta_1.jpg";
import chickenImg from "./chicken-thighs.png";
import vegImg from "./veg-bake.jpg";
import fishImg from "./fish.jpeg";
import Suggestions from "./Suggestions";

function App() {
  const [todos, setTodos] = useState([]);

  const [popularRecipies, setPopularRecipies] = useState([
    {
      name: "Caponata Pasta",
      image: pastaImg,
      link: "https://www.bbcgoodfood.com/recipes/caponata-pasta",
    },
    {
      name: "Crispy Chicken Thighs",
      image: chickenImg,
      link:
        "https://www.countryliving.com/food-drinks/a28942039/crispy-chicken-thighs-with-garlic-and-rosemary-recipe/",
    },
    {
      name: "Aloo Gobi Tray Bake",
      image: vegImg,
      link: "https://realfood.tesco.com/recipes/aloo-gobi-traybake.html",
    },
    {
      name: "Parmesan Fish Crust Bake",
      image: fishImg,
      link: "https://www.myrecipes.com/recipe/parmesan-crusted-baked-fish",
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    "Chilli con carne recipe",
    "Spiced carrot & lentil soup",
    "Chicken & Chorizo Jambalaya",
    "Summer-in-winter chicken",
    "Spicy root & lentil casserole",
    "Chicken biryani",
    "Creamy courgette lasagne",
  ]);

  const[showSuggestions, setShowSuggestions] = useState(false)

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
      <div className="row mt-2">
        {popularRecipies.map((recipies) => (
          <div key={recipies.name} style={{ margin: "0 auto" }}>
            <div className="row mt-2">{recipies.name}</div>

            <div className="row mt-2">
              <a href={recipies.link}>
                <img
                  className="card-img-top"
                  src={recipies.image}
                  alt="Image"
                  style={{ width: "15rem", margin: "0 auto" }}
                ></img>
              </a>
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
      <Suggestions suggestions = {suggestions} showSuggestions = {showSuggestions}/>
    </>
  );
}

export default App;

import React, { useState, useRef, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Form, FormControl, Button,} from "react-bootstrap";
import "./App.css";
import pastaImg from "./caponata-pasta_1.jpg";
import chickenImg from "./chicken-thighs.png";
import vegImg from "./veg-bake.jpg";
import fishImg from "./fish.jpeg";
import Suggestions from "./Suggestions";
import RecipieList from "./RecipieList";

export default function HomePage(props) {
  const [todos, setTodos] = useState([]);

  const [popularRecipies, setPopularRecipies] = useState([
    {
      title: "Caponata Pasta",
      image: pastaImg,
      link: "https://www.bbcgoodfood.com/recipes/caponata-pasta",
    },
    {
      title: "Crispy Chicken Thighs",
      image: chickenImg,
      link:
        "https://www.countryliving.com/food-drinks/a28942039/crispy-chicken-thighs-with-garlic-and-rosemary-recipe/",
    },
    {
      title: "Aloo Gobi Tray Bake",
      image: vegImg,
      link: "https://realfood.tesco.com/recipes/aloo-gobi-traybake.html",
    },
    {
      title: "Parmesan Fish Crust Bake",
      image: fishImg,
      link: "https://www.myrecipes.com/recipe/parmesan-crusted-baked-fish",
    },
  ]);

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }

  const debounceOnChange = useCallback(debounce(userInput, 1000), []);

  function userInput(event) {
    let text = event;
    if (text.length >= 3) {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&query=${text}`
      )
        .then((result) => result.json())
        .then((data) => {
          const uniqueArray = data.results.filter(
            (result, index, self) =>
              self.findIndex((r) => r.title === result.title) === index
          );
          setSuggestions(uniqueArray);
          setShowSuggestions(true);
        });
    } else if (event.target.value.length <= 3) {
      setShowSuggestions(false);
    }
  }
  return (
    <>
      <div className="heading">
        <h1>Popular Recipies of The Week</h1>
      </div>
      <div className="row mt-2">
        {popularRecipies.map((recipies) => (
          <div key={recipies.title} style={{ margin: "0 auto" }}>
            <div className="row mt-2">{recipies.title}</div>

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
              onChange={(e) => debounceOnChange(e.target.value)}
              type="text"
              placeholder="Search"
              style={{ width: "650px" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </div>
      <Suggestions
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        setRecipeDetails={props.setRecipeDetails}
      />

      
    </>
  );
}

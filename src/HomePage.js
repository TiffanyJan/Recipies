import React, { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Form, FormControl, Button,} from "react-bootstrap";
import "./App.css";
import pastaImg from "./penne.jpg";
import chickenImg from "./chickenThighs.jpg";
import vegImg from "./curryTrayBake.jpg";
import fishImg from "./fish.jpg";
import Suggestions from "./Suggestions";
import RecipieList from "./RecipieList";
import Smoothie from "./Smoothie.jpg";
import cookies from "./cookies.jpg";
import pasta from "./pasta.jpg";
import breakfast from "./pancakes.jpg";

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
      title: "Curry Tray Bake",
      image: vegImg,
      link: "https://realfood.tesco.com/recipes/aloo-gobi-traybake.html",
    },
    {
      title: "Parmesan Fish Crust Bake",
      image: fishImg,
      link: "https://www.myrecipes.com/recipe/parmesan-crusted-baked-fish",
    },
  ]);

  const [favouriteRecipies,setFavouriteRecipies] = useState([
    {
    title: "smoothie",
    image: Smoothie,
    link: "https://www.bbc.co.uk/food/recipes/blackberry_and_apple_39192",
    },
    {
      title:"cookies",
      image: cookies,
      link: "https://www.bbc.co.uk/food/recipes/anytimecookies_92185",
    },
    {
      title:"Pasta",
      image: pasta,
      link: "https://www.bbc.co.uk/food/collections/6_easy_spaghetti_suppers",
    },
    {
      title: "breakfasts",
      image: breakfast,
      link:"https://www.bbc.co.uk/food/search?q=breakfast",
    }

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
    } else if (event.target && event.target.value.length <= 3) {
      setShowSuggestions(false);
    }
  }
  return (
    <>
      <div className="heading">
        <h1>Recipies</h1>
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
                  style={{ width: "8rem", margin: "0" }}
                ></img>
              </a>
            </div>
          </div>
        ))}
      </div>

      <RecipieList todos={todos} setTodos={setTodos} />
      <div className="row mt-2" align="center">
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
      </div>
      <Suggestions
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        setRecipeDetails={props.setRecipeDetails}
      />
      <div className="row mt-2" align="center">
      <div className="heading">
        <h1>All Time Favourites</h1>
        </div>
        <div className="row mt-2">
        {favouriteRecipies.map((recipies) => (
          <div key={recipies.title} style={{ margin: "0 auto" }}>
            <div className="row mt-2">{recipies.title}</div>
            <div className="row mt-2">
              <a href={recipies.link}>
                <img
                  className="card-img-top"
                  src={recipies.image}
                  alt="Image"
                  style={{ width: "10rem", margin: "4" }}
                ></img>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </>
  );
}

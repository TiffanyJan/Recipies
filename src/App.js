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

  function userInput(event) {
    let text = event.target.value;

    if (text.length >= 3) {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&query=${text}`
      )
        .then((result) => result.json())
        .then((data) => {
          const uniqueArray = data.results.filter(
            (result, index, self) =>
              self.findIndex(
                (r) => r.title === result.title
              ) === index
          );
          setSuggestions(uniqueArray);
          setShowSuggestions(true);
        });

    //   setSuggestions(
    //     [
    //         {
    //             "id": 296687,
    //             "title": "Chicken",
    //             "image": "https://spoonacular.com/recipeImages/296687-312x231.jpeg",
    //             "imageType": "jpeg"
    //         },
    //         {
    //             "id": 379523,
    //             "title": "Chicken",
    //             "image": "https://spoonacular.com/recipeImages/379523-312x231.jpeg",
    //             "imageType": "jpeg"
    //         },
    //         {
    //             "id": 1224783,
    //             "title": "Chicken 65",
    //             "image": "https://spoonacular.com/recipeImages/1224783-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 637876,
    //             "title": "Chicken 65",
    //             "image": "https://spoonacular.com/recipeImages/637876-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 737543,
    //             "title": "Chicken Pie",
    //             "image": "https://spoonacular.com/recipeImages/737543-312x231.jpeg",
    //             "imageType": "jpeg"
    //         },
    //         {
    //             "id": 74194,
    //             "title": "Chicken Olé",
    //             "image": "https://spoonacular.com/recipeImages/74194-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 42569,
    //             "title": "Chicken Bbq",
    //             "image": "https://spoonacular.com/recipeImages/42569-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 737537,
    //             "title": "Chicken Pho",
    //             "image": "https://spoonacular.com/recipeImages/737537-312x231.jpeg",
    //             "imageType": "jpeg"
    //         },
    //         {
    //             "id": 279390,
    //             "title": "Chicken Mac",
    //             "image": "https://spoonacular.com/recipeImages/279390-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 496844,
    //             "title": "Chicken Pho",
    //             "image": "https://spoonacular.com/recipeImages/496844-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 583898,
    //             "title": "Chicken Pho",
    //             "image": "https://spoonacular.com/recipeImages/583898-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 83890,
    //             "title": "Chicken Blt",
    //             "image": "https://spoonacular.com/recipeImages/83890-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 311972,
    //             "title": "Chicken Bog",
    //             "image": "https://spoonacular.com/recipeImages/311972-312x231.jpeg",
    //             "imageType": "jpeg"
    //         },
    //         {
    //             "id": 499139,
    //             "title": "Chicken Kiev",
    //             "image": "https://spoonacular.com/recipeImages/499139-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 431053,
    //             "title": "Chicken Mole",
    //             "image": "https://spoonacular.com/recipeImages/431053-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 291352,
    //             "title": "Chicken Mole",
    //             "image": "https://spoonacular.com/recipeImages/291352-312x231.jpeg",
    //             "imageType": "jpeg"
    //         },
    //         {
    //             "id": 197934,
    //             "title": "Chicken Mole",
    //             "image": "https://spoonacular.com/recipeImages/197934-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 1433377,
    //             "title": "Chicken Gyro",
    //             "image": "https://spoonacular.com/recipeImages/1433377-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 74302,
    //             "title": "Chicken Kiev",
    //             "image": "https://spoonacular.com/recipeImages/74302-312x231.jpg",
    //             "imageType": "jpg"
    //         },
    //         {
    //             "id": 716342,
    //             "title": "Chicken Suya",
    //             "image": "https://spoonacular.com/recipeImages/716342-312x231.jpg",
    //             "imageType": "jpg"
    //         }
    //     ]
    // )
    //setShowSuggestions(true);

    } else if (event.target.value.length <= 3) {
      setShowSuggestions(false);
    }
  }

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
              onChange={userInput}
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
      />
    </>
  );
}

export default App;

import React from "react";
import { Row } from "react-bootstrap";
import Recipie from "./Recipie";
import { Route, Switch, Link } from "react-router-dom";

export default function Suggestions(props) {


  function getRecipieDetails(id){
    fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => response.json())
          .then((data) => {
               console.log(data.sourceUrl)
            window.location = data.sourceUrl
          })
}

  function showSuggestions() {
    if (props.showSuggestions == true) {
      return "container";
    } else {
      return "hide";
    }
  }

  return (
    <div className={showSuggestions()}>
      <div className="container">
        <Row className="justify-content-lg-center">
        <Route path="/Recipie" component={Recipie}/>
          {props.suggestions.map((suggestion) => (
            <Link to="/Recipie"> Recipie
            <div
              key={suggestion.id}
              className="box"
              onClick={() => getRecipieDetails(suggestion.id)}
            >
              {suggestion.title}
            </div>
            </Link>
          ))}
        </Row>
      </div>
    </div>
  );
}

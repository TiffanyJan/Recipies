import React from "react";
import { Row } from "react-bootstrap";

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
          {props.suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="box"
              onClick={() => getRecipieDetails(suggestion.id)}
            >
              {suggestion.title}
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}

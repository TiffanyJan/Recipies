import React from "react";
import { Row } from "react-bootstrap";

export default function Suggestions(props) {
  console.log(props);

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
              onClick={() => console.log(suggestion.title)}
            >
              {suggestion.title}
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}

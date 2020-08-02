import React from 'react'
import {Row} from "react-bootstrap";

export default function Suggestions(props) {

    function showSuggestions() {
        if (props.showSuggestions == true) {
          return "container";
        } else {
          return "hide";
        }
      }
    
    return (
        <div className = {showSuggestions()}>
        <div className="container">
        <Row className="justify-content-lg-center">
        {props.suggestions.map((suggestion)=> <div key={suggestion} className="box">{suggestion}</div>)}
        </Row>
      </div>
      </div>
    )
}

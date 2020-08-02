import React from 'react'
import {Row} from "react-bootstrap";

export default function Suggestions(props) {
    return (
        <div className="container">
        <Row className="justify-content-lg-center">
        {props.suggestions.map((suggestion)=> <div className ="box">{suggestion}</div>)}
        </Row>
      </div>
    )
}

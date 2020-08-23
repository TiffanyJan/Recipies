import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Recipie(props) {
  const [instructionDetails, setInstructionDetails] = useState("");

  function stripHtml(summary) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = summary;
    return tmp.textContent || tmp.innerText || "";
  }

  function instructions(recipeDetails) {
    if (recipeDetails.instructions) {
      let splitsentences = recipeDetails.instructions.split(". ");
      let trimmedSentences = splitsentences.map((sentence) => sentence.trim());
      console.log(trimmedSentences);

      return trimmedSentences.map((trimmedsentence, index) => (
        <div className="row mt-1  justify-content-center">
            <div className="indexText">{index + 1} </div>
          <div> {trimmedsentence}</div>
        </div>
      ));
    } else {
      return <a href={recipeDetails.sourceUrl}>{recipeDetails.sourceUrl}</a>;
    }
  }

  const showRecipe = (recipeDetails) => {
    if (recipeDetails) {
      return (
        <>
          <div>
            <div className="heading">
              <h1>{recipeDetails.title}</h1>
            </div>
            <div className="row mt-2">
              <div className="col-sm 2">
                <img src={recipeDetails.image}></img>
              </div>
              <div className="col-sm">{stripHtml(recipeDetails.summary)}</div>
            </div>
            <div className="row mt-2">
              <div className="subHeading">
                <h2>Servings:</h2>
              </div>
              <div className="servings">{recipeDetails.servings}</div>
            </div>
            <div className="row mt-2">
              <div className="col-sm">
                <div className="subHeading">
                  <h2>Instructions:</h2>
                </div>
                {instructions(recipeDetails)}
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <div>{showRecipe(props.recipeDetails)}</div>;
}

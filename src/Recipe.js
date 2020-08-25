import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Recipie(props) {
  function stripHtml(summary) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = summary;
    return tmp.textContent || tmp.innerText || "";
  }

  function instructions(recipeDetails) {
    if (recipeDetails.instructions) {
      let splitsentences = recipeDetails.instructions.split(". ");
      let trimmedSentences = splitsentences.map((sentence) => sentence.trim());

      return trimmedSentences.map((trimmedsentence, index) => (
        <div className="row mt-1  justify-content-center" key={index}>
          <div className="col-sm-1">
            <div className="indexText">{index + 1} </div>
          </div>
          <div className="col-sm-5">{trimmedsentence}</div>
        </div>
      ));
    } else {
      return <a href={recipeDetails.sourceUrl}>{recipeDetails.sourceUrl}</a>;
    }
  }

  function minutes(recipeDetails) {

    if (recipeDetails.cookingMinutes) {
      return <div>{recipeDetails.cookingMinutes}</div>;
    }
  }

  function cuisine(recipeDetails){
    console.log(recipeDetails.cuisines)
    if(recipeDetails.cuisines){
    return recipeDetails.cuisines.map ((cuisine)=> <div>{cuisine}</div>)
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
              <div className="col-sm">
                <div className="servings">
                  Servings:{recipeDetails.servings}
                </div>
              </div>
              <div className="col-sm">
              <div className="servings">
                  Cuisine: {cuisine(recipeDetails)}
             </div>
              </div>
              <div className="col-sm">
                <div className="minutes">
                  Cooking Time:{minutes(recipeDetails)} minutes
                </div>

              </div>
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

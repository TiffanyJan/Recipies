import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Recipie(props) {
  const showRecipe = (recipeDetails) => {
    if (recipeDetails) {
      console.log(recipeDetails);
      return (
        <>
          <div>
            <div className="heading">
              <h1>{recipeDetails.title}</h1>
            </div>
            {recipeDetails.summary}
            <div className="row mt-2">
              <img src={recipeDetails.image}></img>
            </div>
          </div>
        </>
      );
    } else {
      return <h1>No recipe image</h1>;
    }
  };

  return <div>{showRecipe(props.recipeDetails)}</div>;
}

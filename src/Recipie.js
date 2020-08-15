import React from 'react'

export default function Recipie(props) {

   const showRecipe = (recipeDetails) => {
      if(recipeDetails) {
          console.log(recipeDetails)
          return (
              <>
          <div>
          <h1>{recipeDetails.title}</h1>
          {recipeDetails.summary} 
          <img src={recipeDetails.image}></img>
          </div> 
          </>
          )}
      else {
          return  <h1>No recipe image</h1>
      }
   }


    return (
        <div>
          {showRecipe(props.recipeDetails)}
        </div>
    )
}

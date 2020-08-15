import React from 'react'

export default function Recipie(props) {

   const showRecipe = (recipeDetails) => {
      if(recipeDetails) {
          console.log(recipeDetails)
          return <img src={recipeDetails.image}></img>
      }
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

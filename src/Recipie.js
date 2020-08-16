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
      return recipeDetails.instructions;
    } else {
      return <a href={recipeDetails.sourceUrl}>{recipeDetails.sourceUrl}</a>;
    }
  }

  const showRecipe = (recipeDetails) => {
    if (recipeDetails) {
      console.log(recipeDetails);
      return (
        <>
          <div>
            <div className="heading">
              <h1>{recipeDetails.title}</h1>
            </div>
            <div className="row mt-2">
              <div className="col-sm">{stripHtml(recipeDetails.summary)}</div>
            </div>
            <div className="row mt-2">Servings:{recipeDetails.servings}</div>
            <div className="row mt-2">
              <img src={recipeDetails.image}></img>
            </div>
            <div className="row mt-2">
              <div className="col-sm">
                Instructions: {instructions(recipeDetails)}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="heading">
            <h1>Crissp Side Salad</h1>
          </div>
          <div className="row mt-2">
          <div className="col-sm 2">IMAGE</div>
            <div className="col-sm">
              You can never have too many side dish recipes, so give Crisp Side
              Salad a try. This recipe makes 4 servings with 198 calories, 2g of
              protein, and 16g of fat each. For $1.2 per serving, this recipe
              covers 12% of your daily requirements of vitamins and minerals.
              This recipe is liked by 1 foodies and cooks. It is a good option
              if you're following a gluten free and dairy free diet. From
              preparation to the plate, this recipe takes roughly 10 minutes. If
              you have carrots, pepper, salt, and a few other ingredients on
              hand, you can make it. All things considered, we decided this
              recipe deserves a spoonacular score of 67%. This score is solid.
              Try Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish,
              Side Salad, and Festive Side Salad for similar recipes.
            </div>
            
          </div>
          <div className="row mt-2">Servings: 5</div>
        </>
      );
    }
  };

  return <div>{showRecipe(props.recipeDetails)}</div>;
}

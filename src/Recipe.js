import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Recipie(props) {
  const [moreRecipeDetails, setMoreRecipeDetails] = useState();


  useEffect(() => {
    getMoreRecipeDetails(390739);
  }, []);

  function getMoreRecipeDetails(id) {
    //         fetch(
    //               `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`
    //             )
    //             .then((response) => response.json())
    //               .then((data) => {
    // console.log(data)

    //               })

    let mockData = [
      {
        name: "",
        steps: [
          {
            number: 1,
            step:
              "In a small heavy skillet, melt butter over medium-high heat. In a small bowl, combine the remaining ingredients; add to the skillet. Cover and cook until crisp on the bottom. Turn and brown other side.",
            ingredients: [
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
        ],
      },
    ];

    setMoreRecipeDetails(mockData);
  }



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

  const extractRecipeDetails = (moreRecipeDetails) => {
    if (moreRecipeDetails) {
      let steps = moreRecipeDetails.map((moreRecipeDetail) =>
        moreRecipeDetail.steps.map((stepItem) => stepItem.step)
      );
      console.log(steps.map((step) => step[0]))
     return steps.map((step) => step[0])
    }
  };

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
              <div className="col-sm 2">
                {" "}
                <img src={recipeDetails.image}></img>
              </div>
              <div className="col-sm">{stripHtml(recipeDetails.summary)}</div>

              <div className="col-sm">
                {getMoreRecipeDetails(recipeDetails.id)}
                {moreRecipeDetails}
              </div>
            </div>
            <div className="row mt-2">Servings:{recipeDetails.servings}</div>
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
            <h1>Crisp Side Salad</h1>
          </div>
          <div className="row mt-2">
            <img src="https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/01/gnocchi.jpg?itok=clE5PO6D  "></img>
            <div className="col-sm">
              {extractRecipeDetails(moreRecipeDetails)}
            </div>
          </div>
          <div className="row mt-2">Servings: 5</div>
        </>
      );
    }
  };

  return <div>{showRecipe(props.recipeDetails)}</div>;
}

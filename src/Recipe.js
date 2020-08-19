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

  const extractRecipeStep = (moreRecipeDetails) => {
      if(!moreRecipeDetails)
        return 
        else {
          console.log(moreRecipeDetails[0].steps[0])
          return  moreRecipeDetails[0].steps[0].step

        }
  };

  

  const extractRecipeInstructions = (moreRecipeDetails) => {
    if(!moreRecipeDetails)
      return 
      else {
        console.log(moreRecipeDetails[0].steps[0])
        return  moreRecipeDetails[0].steps[0].ingredients[0].name

      }

};


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
                {" "}
                <img src={recipeDetails.image}></img>
              </div>
              <div className="col-sm">{stripHtml(recipeDetails.summary)}</div>

              <div className="col-sm">
                {moreRecipeDetails[0].steps[0].step}
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

      ///MOCK HTML
      return (
        <>
          <div className="heading">
            <h1>Crisp Side Salad</h1>
          </div>
          <div className="row mt-2">
<<<<<<< HEAD
            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flourless-brownies-36d824c.jpg?webp=true&quality=90&resize=440%2C400"></img>
            <div className="col-sm">
              {extractRecipeStep(moreRecipeDetails)}
            </div>
=======
            <img src="data:image/jpeg;base64,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"></img>
>>>>>>> d77de349b8ad631f5bcd7a803954397499bfaff2
            <div className="col-sm">
              {extractRecipeInstructions(moreRecipeDetails)}
            </div>
          </div>
          <div className="row mt-2">Servings: 5</div>
        </>
      );
    }
  };

  return <div>{showRecipe(props.recipeDetails)}</div>;
}

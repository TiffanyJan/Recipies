import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import NewRecipiesPage from "./NewRecipiesPage";
import HomePage from "./HomePage";
import Recipe from "./Recipe";

function App() {
  const [recipeDetails, setRecipeDetails] = useState();

  return (
    <>
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href="#Recipies">  
        <Nav.Link>
            <Link to="/"> Recipies </Link>
          </Nav.Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/"> Home </Link>
          </Nav.Link>
          
          <Nav.Link>
            <Link to="/NewRecipiesPage"> New Recipies </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <main>
        <Switch>
          <Route path="/NewRecipiesPage" component={NewRecipiesPage} />
          <Route
            path="/Recipe"
            render={() => (
              <Recipe recipeDetails={recipeDetails} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <HomePage setRecipeDetails={setRecipeDetails} />
            )}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;

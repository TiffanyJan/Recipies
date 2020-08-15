import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import NewRecipiesPage from "./NewRecipiesPage";
import HomePage from "./HomePage";
import PopularRecipiesPage from "./PopularRecipiesPage";
import Recipie from "./Recipie";

function App() {
  return (
    <>
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href="#home"> Recipies </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
             <Link to="/"> Home </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/NewRecipiesPage"> New Recipies </Link>
          </Nav.Link>
          <Nav.Link> <Link to="/PopularRecipiesPage"> Popular Recipies </Link></Nav.Link>
        </Nav>
      </Navbar>
      <main>
        <Switch>
          <Route path="/NewRecipiesPage" component={NewRecipiesPage} />
          <Route path="/PopularRecipiesPage" component={PopularRecipiesPage}/>
          <Route path="/Recipie" component={Recipie}/>
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </>
  );
}

export default App;

import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import NewRecipiesPage from "./NewRecipiesPage";
import HomePage from "./HomePage";

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
          <Nav.Link> Popular Recipies </Nav.Link>
        </Nav>
      </Navbar>
      <main>
        <Switch>
          <Route path="/NewRecipiesPage" component={NewRecipiesPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </>
  );
}

export default App;

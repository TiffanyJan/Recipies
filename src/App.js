import React, { useState} from "react";
import { Route, Switch, Link } from "react-router-dom";
import NewRecipiesPage from "./NewRecipiesPage";
import HomePage from "./HomePage";


function App() {

  

  return (
    <>

     <main>
    <Switch> 
    <Route path='/NewRecipiesPage' component={NewRecipiesPage} />
    <Route path ='/' component ={HomePage}/>
    </Switch>
    </main>

    
    </>
    
    
  );
  }

export default App;

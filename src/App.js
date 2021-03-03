import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignedIn from "./components/auth/SignedIn";
import SignedUp from "./components/auth/SignedUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/project/CreateProject";
import ProjectDetails from "./components/project/ProjectDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
       <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/project/:id'  component={ProjectDetails} />
         <Route path='/signin' component={SignedIn} />
         <Route path='/signup' component={SignedUp} />
         <Route patth='/createproject' component={CreateProject} />
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

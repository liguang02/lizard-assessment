// main component of the project, where all the other components are rendered
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

// this component handles the routing paths
function App() {
 
  return (
    <Router>
      <div className="content">
        <h1>Lizard Assessment</h1>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
    
)}

export default App;

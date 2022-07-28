import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Money from "views/money";
import Statistics from "views/statistics";
import NoMatch from "views/404";
import { TagEdit } from "views/TagEdit";
import Tags from "views/tags";

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/tags/:id">
            <TagEdit />
          </Route>
          <Route exact path="/tags">
            <Tags />
          </Route>

          <Route exact path="/money">
            <Money />
          </Route>

          <Route exact path="/statistics">
            <Statistics />
          </Route>

          <Route exact path="/">
            <Money />
          </Route>
          
          <Route path="*">
            <NoMatch />
          </Route>  
          <Redirect from="/" to="/money"/>  
        </Switch>
    </Router>
  );
}

export default App;

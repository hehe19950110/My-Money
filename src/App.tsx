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
import styled from "styled-components";

const Rxs = styled.div`
  max-width: 400px;
  background-attachment: fixed;
  background-image: linear-gradient(to right bottom ,#f5f5b6,#88c39c,#3c5644);
  //background: linear-gradient( #f5f5b6,#649173,#3c5644);
  position: relative;
  margin: 0 auto;

`
function App() {
  return (
    <Rxs>
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
    </Rxs>
  );
}

export default App;

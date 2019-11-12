import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListCategory from "./ListCategory";
import ChoixQfmVF from "./ChoixQfmVF";
import CardQuestion from './CardQuestion';
import Nav from './Nav'



class Routes extends React.Component {
   render () {
       return (
    <div> 
    <Router>
          <Switch>

            <Route exact path="/" component={ListCategory} />
            

            <Route path="/choiceQuestion" render={(props) => <><Nav /><ChoixQfmVF {...props}/></>}  />

            <Route path="/question" render={(props) => <><Nav /><CardQuestion {...props}/></>} />

          </Switch>
    </Router>
    </div>
       )}}

export default Routes;
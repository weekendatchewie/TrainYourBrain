import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListCategory from "./ListCategory";
import ChoixQfmVF from "./ChoixQfmVF";
import CardQuestion from './CardQuestion';


class Routes extends React.Component {
   render () {
       return (
    <div> 
    <Router>
          <Switch>

            <Route exact path="/" component={ListCategory} />
            

            <Route path="/choiceQuestion" render={(props) => <ChoixQfmVF {...props}/>}  />

            <Route path="/question" render={(props) => <CardQuestion {...props}/>} />

          </Switch>
    </Router>
    </div>
       )}}

export default Routes;
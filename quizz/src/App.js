import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CardQuestion from './components/CardQuestion';
import ListCategory from './components/ListCategory';
import ChoixQfmVF from './components/ChoixQfmVF';
import Nav from './components/Nav';
import Routes from './components/Routes';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

  

  render() {
    return (
      <div className="App">
        
        <Nav />
        <Routes/>

      </div>
    );
  }
}

export default App;

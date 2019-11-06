import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CardQuestion from './components/CardQuestion';
import ListCategory from './components/ListCategory';
import ChoixQfmVF from './components/ChoixQfmVF';
import ChoiceQuizz from './components/ChoiceQuizz';
import Nav from './components/Nav'

class Hello extends React.Component {
  componentDidMount() {
    console.log("hello", this.props.match.params.categoryName);
    this.props.setChosenCategory(this.props.match.params.categoryName);
  }
  render() {
    return (
      <>
        <Link to="/">home</Link>
        <p>hello {this.props.match.params.categoryName}</p>
      </>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastChosenCategory: ''
    };
    this.setChosenCategory = this.setChosenCategory.bind(this);
  }

  setChosenCategory(category) {
    console.log("set state", category);
    this.setState({lastChosenCategory: category});
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <ListCategory {...props} lastChosenCategory={this.state.lastChosenCategory} />} />
            <Route exact path="/categories/:categoryName" render={(props) => <Hello {...props} setChosenCategory={this.setChosenCategory} />} />
          </Switch>
        </BrowserRouter>
      {/*<ListCategory/>
      <ChoixQfmVF />
      <CardQuestion />*/}
      
      
      </div>
    );
  }
}

export default App;

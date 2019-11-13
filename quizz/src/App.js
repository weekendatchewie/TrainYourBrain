import React from 'react';
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
        
        <Routes/>

      </div>
    );
  }
}

export default App;

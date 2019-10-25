import React from 'react';
import CardQuestion from './components/CardQuestion';
import CardQuestionBool from './components/CardQuestionBool';
import ListCategory from './components/ListCategory';
import ChoixQfmVF from './components/ChoixQfmVF';



function App() {
  return (
    <div className="App">
     <ListCategory/>
     <ChoixQfmVF />
     <CardQuestion />
     <CardQuestionBool />
     
     
    </div>
  );
}

export default App;

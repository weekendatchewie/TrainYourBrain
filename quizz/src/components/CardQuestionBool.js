import React from "react"
import './CardQuestion.css'
import ButtonBool from './ButtonBool'

class CardQuestionBool extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category :'History',
            question :'Kublai Khan is the grandchild of Genghis Khan?',
            correct_answer :'True',
            incorrect_answer :{
                0 :'False'}
        };
    }
    render() {
    return (
    <div className='cardContent' id="cardContentBool">
        <figure className='imageContainer'>
            <img className='imageCategory' alt='category'  src="https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_960_720.jpg"></img>
        </figure>
       
        <p>{this.state.question}</p>
        <p>Right or Wrong ?</p>
        <div>
            <ButtonBool correct_answer = 'True' incorrect_answer ={['False']}/>
        </div>
  
    </div>
    )}   
}

export default CardQuestionBool;

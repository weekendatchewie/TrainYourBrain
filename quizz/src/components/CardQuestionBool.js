import React from "react"
import './CardQuestion.css'
import ButtonBool from './ButtonBool'

class CardQuestionBool extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category :'Animals',
            question :'Kangaroos keep food in their pouches next to their children.',
            correct_answer :'False',
            incorrect_answer :{
                0 :'True'}
        };
    }
    render() {
    return (
    <div className='cardContent'>
        <figure className='imageContainer'>
            <img className='imageCategory' alt='category'  src="https://image.noelshack.com/fichiers/2019/43/4/1571870628-frog-solid-svg-1.jpg"></img>
        </figure>
       
        <p>{this.state.question}</p>
        <p>Right or Wrong ?</p>
        <div>
            <ButtonBool correct_answer = 'False' incorrect_answer ={['True']}/>
        </div>
  
    </div>
    )}   
}

export default CardQuestionBool;

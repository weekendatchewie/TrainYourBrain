import React from "react"
import './CardQuestion.css'
import ButtonQcm from './ButtonQcm'

class CardQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category :'Geographie',
            question :'Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?',
            correct_answer : 'Quatar',
            incorrect_answer :{
                0: 'Kuwait',
                1:'United Arab Emirate',
                2: 'Jordan'
            }
        };
    }
    render() {
    return (
    <div className='cardContent'>
        <figure>
            <img alt=''  src="http://data-cache.abuledu.org/512/logo-de-la-geographie-504bb9b4.jpg"></img>
        </figure>
       
        <p>{this.state.question}</p>
        <p>Choose the correct answer</p>
        <div>
            <ButtonQcm />
        </div>

    
    </div>
    )
}
}

export default CardQuestion;

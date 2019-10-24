import React from "react"
import './ButtonQcm.css'

class ButtonQcm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
    
        <div>
            <button 
            onClick={event => 
                { console.log("Good answer")}}                  
            className='qcmButton' >{this.state.correct_answer}</button>

            <button
            onClick={event => 
                { console.log("Wrong answer")}}        
            className='qcmButton'>{this.state.incorrect_answer[0]}</button>
        </div>
        <div>
            <button 
            onClick={event => 
                { console.log("Wrong answer")}}
            className='qcmButton'>{this.state.incorrect_answer[1]}</button>

            <button
            onClick={event => 
                { console.log("Wrong answer")}}
            className='qcmButton'>{this.state.incorrect_answer[2]}</button>
        </div>

    
    </div>
    )
}
}
export default ButtonQcm;

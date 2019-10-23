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
            <button className='qcmButton' >{this.state.correct_answer}</button>
            <button className='qcmButton'>{this.state.incorrect_answer[0]}</button>
        </div>
        <div>
            <button className='qcmButton'>{this.state.incorrect_answer[1]}</button>
            <button className='qcmButton'>{this.state.incorrect_answer[2]}</button>
        </div>

    
    </div>
    )
}
}
export default ButtonQcm;

import React from "react"
import './ButtonQcm.css'

function goodAnswer() {
    const win = document.getElementById('winImage');
    win.style.display= 'block'
    
}

function ButtonQcm (props)  { 
         
    return (   
    <div className='cardContent'>
        <div>
            <button onClick={goodAnswer()}
                className='qcmButton'>{props.correct_answer}</button>

            <button onClick={event =>
                {console.log("Wrong answer")}} className='qcmButton'>{props.incorrect_answer[0]}</button>
        </div>
        <div>
            <button onClick={event =>
                {console.log("Wrong answer")}} className='qcmButton'>{props.incorrect_answer[1]}</button>
            <button onClick={event =>
                {console.log("Wrong answer")}} className='qcmButton'>{props.incorrect_answer[2]}</button>
        </div>   
        <div className='imageWin' id='winImage'>
             <img src={"https://i.ibb.co/hKPnGTt/Gagne.png"} alt="Gagne" ></img>     
        </div> 
    </div>
    )
 }


 export default ButtonQcm;
 
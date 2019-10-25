import React from "react"
import './ButtonQcm.css'
import ButtonMask from './ButtonMask'

function ButtonBool(props)  {    
  return (
  <div className='cardContent'>
    <div>
      <button 
        onClick={event => 
          {(props.correct_answer === 'True')? ButtonMask('winImage','winButton') : alert("Wrong answer")} 
          }
          className='qcmButton' id='winImage1'>Right
      </button>

        
      <button
        onClick={event => 
          {(props.incorrect_answer[0] === 'True')? alert("Good answer") : alert("Wrong answer")} 
          } 
          className='qcmButton'>Wrong
      </button>

    </div>
    <div className='imageWin' id='winImage1'>
             <img src={"https://i.ibb.co/hKPnGTt/Gagne.png"} alt="Gagne" ></img> 
             <div><button className='qcmButton'  >Next question</button>
             </div>    
        </div> 
  </div>
  )
}
export default ButtonBool;
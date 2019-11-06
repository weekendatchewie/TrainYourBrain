import React from "react"
import './ButtonQcm.css'
import ButtonMask from './ButtonMask'
import WinMask from "./WinMask"
import LostMask from './LostMask'


    function LostQcm(idShow,idHide,buttonLost) {
        document.getElementById(idShow).style.display = 'flex'
        document.getElementById(idHide).style.display = 'none'
        document.getElementById(buttonLost).style.backgroundColor = 'blueviolet'

    }


    function ButtonQcm (props)  { 
        console.log(props.correct_answer)
        console.log(props.incorrect_answer)
    
   
    
    function winClick() {
        {props.correct_answer?ButtonMask('winImage','lostImage', 'winButton'):LostQcm('lostImage')}
        props.incrementScore()
        
      }

    function nextQuestion() {
        props.getQuestions()
        WinMask('winImage','winButton')
        LostMask('lostImage', 'lostButton')
    }


    return (   
        
    <div className='cardContent'>
  
        <div>
            <button onClick={winClick}
                id='winButton' className='qcmButton'>{props.correct_answer}
            </button>

            <button onClick={event =>props.correct_answer===true?
                ButtonMask('winImage','winButton'):
                LostQcm('lostImage','winImage', 'lostButton1')} 
                className='qcmButton lostButton' id='lostButton1'>{props.incorrect_answer[0]}
            </button>
        </div>

        <div>
            <button onClick={event =>props.correct_answer===true?
                ButtonMask('winImage','winButton'):
                LostQcm('lostImage','winImage', 'lostButton2')}
                className='qcmButton lostButton' id='lostButton2'>{props.incorrect_answer[1]}
            </button>

            <button onClick={event =>props.correct_answer===true?
                ButtonMask('winImage','winButton'):
                LostQcm('lostImage','winImage', 'lostButton2')}
                className='qcmButton lostButton' id='lostButton3'>{props.incorrect_answer[2]}
            </button>
        </div> 

        <div className='imageWin' id='winImage'>
             <img className='winLogo' src={"https://i.ibb.co/bFwKdvc/gagne.png"} alt="Win" ></img> 
             <div><button onClick={nextQuestion} className='qcmButton'  >Next question</button>
             </div>    
        </div> 
        <div className='imageLost' id='lostImage'>
             <img className='lostLogo' src={"https://i.ibb.co/w6WWNRy/lost.png"} alt="Lost" ></img> 
             <div><button onClick={nextQuestion} className='qcmButton'  >Next question</button>
             </div>    
        </div> 
    </div>
    )
    
 }


 export default ButtonQcm;


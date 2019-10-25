import React from "react"
import './ButtonQcm.css'
import ButtonMask from './ButtonMask'

function LostQcm(idShow) {
    document.getElementById(idShow).style.display = 'flex'
}


function ButtonQcm (props)  { 
    console.log(props.correct_answer)    
    return (   
        
    <div className='cardContent'>
  
        <div>
            <button onClick={event =>props.correct_answer==='Quatar'?ButtonMask('winImage','winButton'):LostQcm('lostImage')}
                id='winButton' className='qcmButton'>{props.correct_answer}</button>

            <button onClick={event =>props.correct_answer===true?ButtonMask('winImage','winButton'):LostQcm('lostImage')} 
            className='qcmButton'>{props.incorrect_answer[0]}</button>
        </div>
        <div>
            <button onClick={event =>
                {alert("Wrong answer")}} className='qcmButton'>{props.incorrect_answer[1]}</button>
            <button onClick={event =>
                {alert("Wrong answer")}} className='qcmButton'>{props.incorrect_answer[2]}</button>
        </div>   
        <div className='imageWin' id='winImage'>
             <img className='winLogo' src={"https://i.ibb.co/CBvyV07/Gagne1.png"} alt="Gagne" ></img> 
             <div><button className='qcmButton'  >Next question</button>
             </div>    
        </div> 
        <div className='imageLost' id='lostImage'>
             <img className='lostLogo' src={"https://i.ibb.co/ZMyr8Vp/lost-svg.png"} alt="Gagne" ></img> 
             <div><button className='qcmButton'  >Next question</button>
             </div>    
        </div> 
    </div>
    )
    
 }


 export default ButtonQcm;
 
import React from "react"
import './CardQuestion.css'
import './ButtonQcm.css'
import MaskButton from './Maskbutton';

class ChoixQfmVF extends React.Component {
  
  render() {
  return (
  <div id="cardContentQcm1">
      <figure className='imageContainer'>
          <img className='imageCategory' alt='category'  src="https://image.noelshack.com/fichiers/2019/43/5/1572034087-image1-1.jpg"></img>
      </figure>
     
      
      <p>Tu es plotôt QCM ou Vrai-Faux ?</p>
      <div className='cardContent'  >
          <div>
            <button onClick={event =>
                MaskButton ('cardContentQcm1', 'cardContentQcm')} className='qcmButton'>QCM</button>
            <button onClick={event =>
                MaskButton ('cardContentQcm1', 'cardContentBool')} className='qcmButton'>True-False</button>
          </div>
     </div>  

  </div>
  )}}   


  
  export default ChoixQfmVF;
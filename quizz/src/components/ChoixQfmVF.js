import React from "react"
import './CardQuestion.css'
import './ButtonQcm.css'
import MaskButton from './Maskbutton';
import ListCategory from './ListCategory'
import Category from './Category'

class ChoixQfmVF extends React.Component {
    
    constructor (props) {
    super (props)
    this.state = {
        selected: this.props.isSelected,
        category: ''
    };
}



  render() {
  return (
  <div id="cardContentQcm1">
      <figure className='all-category'>
      <img className="category-img" src={this.props.image} alt={this.props.category}></img>
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
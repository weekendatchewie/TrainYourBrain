import React from "react"
import './CardQuestion.css'
import './ButtonQcm.css'

import ListCategory from './ListCategory'
import Category from './Category'
import { Link } from 'react-router-dom'

class ChoixQfmVF extends React.Component {
    
    constructor (props) {
    super (props)
    this.state = {
        category: ''
    };
}



  render() {
      console.log(this.props)
  return (
<>
    <div id="cardContentQcm1">
       
        
        <Link to="/">home</Link>
        
        <Category name={this.props.location.state.categoryName} image={this.props.location.state.categoryImage} /> 
        
        <p>Tu es plutôt QCM ou Vrai-Faux ?</p>
        
        
        <div className='cardContent'>
            
            
            <div>
            
       <Link to={{pathname:"/question",
                state: {categoryImage:this.props.image, categoryName:this.props.name, categoryId:this.props.id}}}>
                <button className='qcmButton'>QCM</button>
        </Link>        
                <button className='qcmButton'>True-False</button>
            </div>
        </div>  

    </div>
</>  
  )}}   

  
  export default ChoixQfmVF;
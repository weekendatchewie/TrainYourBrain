import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import CardQuestionBool from './CardQuestionBool.js'
import MaskButton from './Maskbutton';
import ChoixQfmVF from './ChoixQfmVF'

class Category extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            selected: this.props.isSelected,
        };
    }


render () {
    return (
    
       
            <figure className='all-category'>
            
            <Link to={`/categories/${this.props.name}`}><img className="category-img" src={this.props.image} alt={this.props.name} /*onClick={event=> MaskButton ('ListCat', 'cardContentQcm1')  
            }*/ /></Link>
            
            <figcaption className='name-category'>{this.props.name}</figcaption>

            </figure>
           
   
    )
}
}

export default Category;
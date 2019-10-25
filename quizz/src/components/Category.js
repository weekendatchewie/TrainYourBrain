import React from 'react';
import './Category.css';
import CardQuestionBool from './CardQuestionBool.js'
import MaskButton from './Maskbutton';
import ListCategory from './ListCategory'
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
            
            <img className="category-img" src={this.props.image} alt={this.props.name} onClick={event=> MaskButton ('ListCat', 'cardContentQcm1')  
            } />
            <figcaption className='name-category'>{this.props.name}</figcaption>

            </figure>

        
   
    )
}
}

export default Category;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Category.css';
import CardQuestionBool from './CardQuestionBool.js'
import MaskButton from './Maskbutton';
import ChoixQfmVF from './ChoixQfmVF';


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
    <Link to={{pathname:"/choiceQuestion",
                state: {categoryImage:this.props.image, categoryName:this.props.name, categoryId:this.props.id}}}>
            <img className="category-img" src={this.props.image} alt={this.props.name} />
            
    </Link>       
            <figcaption className='name-category'>{this.props.name}</figcaption>

            </figure>
    
   
    )
}
}

export default Category;
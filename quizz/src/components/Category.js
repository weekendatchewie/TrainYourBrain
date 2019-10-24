import React from 'react';
import './Category.css';

class Category extends React.Component {
    constructor (props) {
        super (props)
    };


render () {
    return (
    
        
            <figure className='all-category'>
            
            <img className="category-img" src={this.props.image} alt={this.props.name} />
            <figcaption className='name-category'>{this.props.name}</figcaption>

            </figure>

        
   
    )
}
}

export default Category;
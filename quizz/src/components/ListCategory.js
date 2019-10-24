import React from 'react'
import Category from './Category'
import './Category.css'


const category = [
    {
        name : "Sports",
        image : "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_960_720.jpg"
    },
    {
        name : "History",
        image : "https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_960_720.jpg"
    },
    {
        name : "Geography",
        image : "https://cdn.pixabay.com/photo/2017/08/17/07/47/travel-2650303_960_720.jpg"
    },
    {
        name : "Movies",
        image : "https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433326_960_720.jpg"
    }
];


const ListCategory = () => (
    <div className='ListCategory'>
        {category.map(item => (
            <Category name={item.name} image={item.image}/>
        ))}
    </div>
);

export default ListCategory;


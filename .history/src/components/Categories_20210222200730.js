import '../styles/categories.scss'
import React from 'react'
// names category
import categoryNames from '../data/categoryNames'
//component
import Category from './Category'

const Categories= ({parentCallback,chooseCategory}) =>{
    return(
        <div className='categories-container'>
            {categoryNames.map(category => <Category key={category.id} category={category} 
            parentCallback={parentCallback} chooseCategory={chooseCategory}/>)}
        </div>
    )
}
export default Categories
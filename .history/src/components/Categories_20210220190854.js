import '../styles/categories.scss'
import React from 'react'
import categoryNames from '../data/categoryNames'
import Category from './Category'

const Categories= ({parentCallback,chooseCategory}) =>{
    return(
        <div className='categories-container'>
            {categoryNames.map(category => <Category key={category.id} category={category} parentCallback={parentCallback} chooseCategory={chooseCategory}/>)}
        </div>
    )
}
export default Categories
import React from 'react'
import categoryNames from '../data/categoryNames'
import Category from './Category'

const Categories= ({parentCallbackCategory}) =>{
    return(
        <div>
            {categoryNames.map(category => <Category key={category.id} category={category} parentCallback={parentCallbackCategory} />)}
        </div>
    )
}
export default Categories
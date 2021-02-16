import React from 'react'
import categoryNames from '../data/categoryNames'
import Category from './Category'

const Categories= () =>{
    console.log(categoryNames)
    return(
        <div>
            {categoryNames.map(category => <Category category={category} />)}
        </div>
    )
}
export default Categories
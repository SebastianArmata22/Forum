
import React from 'react'

const Category =({category, parentCallback})=>{
    const setCategory=()=>parentCallback(category)
    return(
        <button onClick={setCategory}>{category.name}</button>
    )
}
export default Category
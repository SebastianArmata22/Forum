
import React from 'react'

const Category =({category, parentCallback})=>{
    const setCategory=()=>parentCallback(category.id)
    return(
        <button onClick={setCategory}>{category.name}</button>
    )
}
export default Category
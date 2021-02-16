import React from 'react'

const Category =({category, parentCallbackCategory})=>{
    const setCategory=()=>parentCallbackCategory(category.id)
    return(
        <button onClick={setCategory}>{category.name}</button>
    )
}
export default Category
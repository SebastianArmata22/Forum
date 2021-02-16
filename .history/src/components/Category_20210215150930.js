import React from 'react'

const Category =({category,parentCallback})=>{
    return(
        <div onClick={()=>parentCallback(category.id)}>{category.name}</div>
    )
}
export default Category
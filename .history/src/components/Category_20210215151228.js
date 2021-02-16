import React from 'react'

const Category =({category,parentCallback})=>{
    console.log(category.name, category.id)
    return(
        <div onClick={()=>parentCallback(category.id)}>{category.name}</div>
    )
}
export default Category
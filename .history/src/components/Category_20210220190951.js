
import React, { useState } from 'react'

const Category =({category, parentCallback,chooseCategory})=>{
    const [selectedCategory,setSelectCategory]=useState('')
    const setCategory=()=>{
        parentCallback(category)
        console.log(chooseCategory===category)
        chooseCategory===category.id && setSelectCategory('selected-category')
    }
    return(
        <button className={selectedCategory} onClick={setCategory}>{category.name}</button>
    )
}
export default Category
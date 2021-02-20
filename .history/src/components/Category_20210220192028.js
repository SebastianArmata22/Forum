
import '../styles/categories.scss'
import React, { useEffect, useState } from 'react'

const Category =({category, parentCallback,chooseCategory})=>{
    const [selectedCategory,setSelectCategory]=useState('')
    const setCategory=()=>{
        parentCallback(category)
        chooseCategory===category && setSelectCategory('selected-category')
    }
    useEffect(()=>{
        chooseCategory===category ? setSelectCategory('selected-category') : setSelectCategory('')
    })
    return(
        <button className={selectedCategory} onClick={setCategory}>{category.name}</button>
    )
}
export default Category
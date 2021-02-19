import '../styles/createPost.scss'
import React, { useState } from 'react'
import {postsCollection} from '../firebase/firebase'
import {auth} from '../firebase/auth'
import firebase from '../firebase/firebase'
import categoryNames from '../data/categoryNames'


const CreatePost=({category})=>{
    const [heading, setHeading]=useState('')
    const [describe, setDescribe]=useState('')
    const [selectCategory, setSelectCategory]=useState(categoryNames[0])

    const changeHeading=(event)=>{
        setHeading(event.target.value)
    }
    const changeDescribe=(event)=>{
        setDescribe(event.target.value)
    }
    const changeSelectCategory=(e)=>{
        setSelectCategory(e.target.value)
    }
    const addPost=async (e)=>{
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser
        await postsCollection.add({
          heading: heading,
          describe: describe,
          category: category.id,
          like: 0,
          unlike: 0,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL,
          displayName
        })
        setDescribe('')
        setHeading('')
    }
    return(
        <div className='create-post-container'>
            <h1>Create new post</h1>
            <select value={selectCategory.id}>
                {categoryNames.map(category=><option key={category.id} value={category} onChange={changeSelectCategory}>{category.name}</option>)}
            </select>
            <form onSubmit={addPost}>
                <input type='text' className='heading-input' value={heading} onChange={e=>changeHeading(e)} placeholder='Heading...'></input>
                <textarea type='text' className='describe-input' value={describe} onChange={e=>changeDescribe(e)} placeholder='Describe...'></textarea>
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}
export default CreatePost
import React, { useState } from 'react'
import {postsCollection} from '../firebase/firebase'
import {auth} from '../firebase/auth'

const CreatePost=({category=1})=>{
    const [heading, setHeading]=useState('')
    const [describe, setDescribe]=useState('')

    const changeHeading=(event)=>{
        setHeading(event.target.value)
    }
    const changeDescribe=(event)=>{
        setDescribe(event.target.value)
    }
    const addPost=async ()=>{
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser
        await postsCollection.add({
          heading: heading,
          describe: describe,
          category: category,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL,
          displayName
        })
        setFormValue('')
    }
    return(
        <div>
            <form onSubmit={addPost}>
                <input type='text' value={heading} onChange={changeHeading} placeholder='Heading...'></input>
                <input type='text' value={describe} onChange={changeDescribe} placeholder='Describe...'></input>
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}
export default CreatePost
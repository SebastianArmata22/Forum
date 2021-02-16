import React, { useState } from 'react'
import {postsCollection} from '../firebase/firebase'
import {auth} from '../firebase/auth'
import firebase from '../firebase/firebase'


const CreatePost=({category=1})=>{
    const [heading, setHeading]=useState('')
    const [describe, setDescribe]=useState('')

    const changeHeading=(event)=>{
        setHeading(event.target.value)
    }
    const changeDescribe=(event)=>{
        setDescribe(event.target.value)
    }
    const addPost=async (e)=>{
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser
        await postsCollection.add({
          heading: heading,
          describe: describe,
          category: category,
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
        <div>
            <form onSubmit={addPost}>
                <input type='text' value={heading} onChange={e=>changeHeading(e)} placeholder='Heading...'></input>
                <input type='text' value={describe} onChange={e=>changeDescribe(e)} placeholder='Describe...'></input>
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}
export default CreatePost
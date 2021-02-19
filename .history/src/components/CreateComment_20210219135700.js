import React from 'react'
import { useState } from 'react'
import {postsCollection} from '../firebase/firebase'
import {auth} from '../firebase/auth'

const CreateComment=({id})=>{
    const [comment, setComment]=useState('')
    const changeComment=(e)=>{
        setComment(e.target.value)
    }
    const addComment=async (e)=>{
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser
        await postsCollection.doc(id).collection('comments').add({
            comment: comment,
            like: 0,
            unlike: 0,
            uid,
            photoURL,
            displayName
        })
    }
    return(
        <div>
            <form onSubmit={addComment}>
                <input type='text' className='' value={comment} onChange={e=>changeComment(e)} placeholder='Comment...'></input>
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}
export default CreateComment
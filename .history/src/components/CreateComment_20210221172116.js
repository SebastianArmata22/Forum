import '../styles/createComment.scss'
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
        const { uid, photoURL, displayName,email } = auth.currentUser
        await postsCollection.doc(id).collection('comments').add({
            comment: comment,
            like: 0,
            unlike: 0,
            uid,
            photoURL,
            displayName: displayName || email

        })
        setComment('')
    }

    return(
        <div className='create-comment-container'>
            <form onSubmit={addComment}>
                <textarea type='text' className='' value={comment} onChange={e=>changeComment(e)} placeholder='Comment...'></textarea>
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}
export default CreateComment
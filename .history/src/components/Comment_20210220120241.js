import '../styles/comment.scss'
import React from 'react'
import like from '../icons/like.svg'
import {postsCollection} from '../firebase/firebase'

const Comment =({comment,postId})=>{
    const addLike=async ()=>{
        await postsCollection.doc(postId).collection('comments').doc(comment.id).update({
            like: comment.like+1
        })
    }
    const addUnlike=async ()=>{
        await postsCollection.doc(postId).collection('comments').doc(comment.id).update({
            unlike: comment.unlike+1
        })
    }
    return(
        <div className='comment-container'>
            <div className='profile'>
                <img src={comment.photoURL} alt="profile"></img>
                <p>{comment.comment}</p>
            </div>
            <div className='reactions-comment'>
                <p onClick={addLike}><img src={like}></img> {comment.like}</p>
                <p onClick={addUnlike}><img src={like} className='unlike'></img> {comment.unlike}</p>
            </div>

        </div>
    )
}
export default Comment
import '../styles/comment.scss'
import React from 'react'
import like from '../icons/like.svg'
const Comment =({comment})=>{
    return(
        <div className='comment-container'>
            <div className='profile'>
                <img src={comment.photoURL} alt="profile"></img>
                <p>{comment.comment}</p>
            </div>
            <div className='reactions-comment'>
                <p><img src={like}></img> {comment.like}</p>
                <p><img src={like} className='unlike'></img> {comment.unlike}</p>
            </div>

        </div>
    )
}
export default Comment
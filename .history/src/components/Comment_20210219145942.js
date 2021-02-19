import React from 'react'
const Comment =({comment})=>{
    return(
        <div>
            <img src={comment.photoURL} alt="profile"></img>
            <p>{comment.comment}</p>
            <p>{comment.like}</p>
            <p>{comment.unlike}</p>

        </div>
    )
}
export default Comment
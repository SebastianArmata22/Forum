import '../styles/post.scss'
import React from 'react'

const Post= ({post})=>{
    return(
        post && <div className='post'>
            <h2>{post.heading}</h2>
            <div className='post-user-container'>
                <img src={post.photoURL}></img>
                <div>
                    <p>Started by {post.displayName}</p>
                    <p>on {post.createdAt.toDate().toDateString()}</p>
                </div>
            </div>
            <p>{post.describe}</p>
            <p>like: {post.like}</p>
            <p>unlike: {post.unlike}</p>
        </div>
    )
}
export default Post
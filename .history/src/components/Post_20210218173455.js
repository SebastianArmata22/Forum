import '../styles/post.scss'
import React from 'react'

const Post= ({post})=>{
    console.log(post);
    return(
        post && <div className='post'>
            <h2>{post.heading}</h2>\
            <div>
                <img src={post.photoURL}></img>
                <p>Started by {post.displayName}</p>
                <p>on {post.createdAt.valueOf()}</p>
            </div>
            <p>{post.describe}</p>
            <p>like: {post.like}</p>
            <p>unlike: {post.unlike}</p>
            
        </div>
    )
}
export default Post
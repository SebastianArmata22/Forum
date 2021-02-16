import React from 'react'

const Post= ({post})=>{
    return(
        post && <div>
            <h2>{post.heading}</h2>
            <p>{post.describe}</p>
            <p>like: {post.like}</p>
            <p>unlike: {post.unlike}</p>
            <p>{post.displayName}</p>
        </div>
    )
}
export default Post
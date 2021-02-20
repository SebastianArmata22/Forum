import '../styles/ShortPost.scss'
import React from 'react'
const ShortPost = ({post, parentCallback,handleCallbackisCreatePost})=>{

    const setParentCallback=()=>{
        parentCallback(post)
        handleCallbackisCreatePost(false)
    }
    return(
        <div className='short-post-container' onClick={setParentCallback}>
            <h3>{post.heading}</h3>
            <p>{post.describe}</p>
        </div>
    )
}
export default ShortPost
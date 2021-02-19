import '../styles/ShortPost.scss'
import React from 'react'
const ShortPost = ({post, parentCallback})=>{
    const setParentCallback=()=>{
        parentCallback(post)
    }
    return(
        <div className='short-post-container' onClick={setParentCallback}>
            <h2>{post.heading}</h2>
            <p>{post.describe}</p>
        </div>
    )
}
export default ShortPost
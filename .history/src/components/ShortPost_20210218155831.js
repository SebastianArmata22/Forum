import '../styles/ShortPost.scss'
import React from 'react'
const ShortPost = ({post, parentCallback})=>{
    const setParentCallback=()=>{
        parentCallback(post)
    }
    return(
        <div classNmae='short-post-container' onClick={setParentCallback}>
            <h3>{post.heading}</h3>
        </div>
    )
}
export default ShortPost
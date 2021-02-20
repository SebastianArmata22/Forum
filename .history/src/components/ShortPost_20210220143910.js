import '../styles/ShortPost.scss'
import React, { useEffect } from 'react'
const ShortPost = ({post, parentCallback,handleCallbackisCreatePost,choosePost})=>{

    const setParentCallback=()=>{
        parentCallback(post)
        handleCallbackisCreatePost(false)
    }
    useEffect(()=>{
        choosePost===post && setParentCallback()
    },[post])
    return(
        <div className='short-post-container' onClick={setParentCallback}>
            <h3>{post.heading}</h3>
            <p>{post.describe}</p>
        </div>
    )
}
export default ShortPost
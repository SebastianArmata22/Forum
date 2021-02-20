import '../styles/ShortPost.scss'
import React, { useEffect, useState} from 'react'
const ShortPost = ({post, parentCallback,handleCallbackisCreatePost, choosePost})=>{
    const [selectedPost,setSelectPost]=useState('')

    const setParentCallback=()=>{
        parentCallback(post)
        handleCallbackisCreatePost(false)
    }
    useEffect(()=>{
        post===choosePost ? setSelectPost(' short-post-container selected-post') : setSelectPost('short-post-container')
    },[choosePost])
    return(
        <div className={selectedPost} onClick={setParentCallback}>
            <h3>{post.heading}</h3>
            <p>{post.describe}</p>
        </div>
    )
}
export default ShortPost
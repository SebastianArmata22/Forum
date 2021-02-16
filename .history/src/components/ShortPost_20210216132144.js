import React from 'react'
const ShortPost = ({post, parentCallback})=>{
    const setParentCallback=()=>{
        parentCallback(post)
    }
    return(
        <div onClick={setParentCallback}>
            <h3>{post.heading}</h3>
        </div>
    )
}
export default ShortPost
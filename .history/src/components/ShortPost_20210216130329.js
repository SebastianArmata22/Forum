import React from 'react'
const ShortPost = ({post})=>{
    return(
        <div>
            <h3>{post.heading}</h3>
            <p>{post.describe}</p>

        </div>
    )
}
export default ShortPost
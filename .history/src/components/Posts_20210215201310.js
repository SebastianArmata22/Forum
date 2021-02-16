import React from 'react'
import CreatePost from './CreatePost'

const Posts= ({category}) =>{
    return(
        <div>
            <CreatePost category={category}/>
        </div>
    )
}
export default Posts
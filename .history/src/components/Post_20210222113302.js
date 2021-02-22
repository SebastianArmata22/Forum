import '../styles/post.scss'
import React, { useEffect, useState } from 'react'
import CreateComment from './CreateComment'
import Comments from './Comments'
import guest from '../images/guest.png'



const Post= ({post})=>{
    const [classes,setClasses]=useState('post mobile')

    useEffect(()=>{
        setClasses('post mobile')
    },[post])
    return(
        post && <div className={classes}>
            <button onClick={()=>setClasses('post')} >x</button>
            <h2>{post.heading}</h2>
            <div className='post-user-container'>
                <img src={post.photoURL ? post.photoURL : guest}></img>
                <div>
                    <p>Started by <span>{post.displayName ? post.displayName : 'Guest'}</span></p>
                    <p>on {post.createdAt.toDate().toDateString()}</p>
                </div>
            </div>
            <p className='describe'>{post.describe}</p>
            <CreateComment id={post.id}/>
            <Comments post={post}/>

        </div>
    )
}
export default Post
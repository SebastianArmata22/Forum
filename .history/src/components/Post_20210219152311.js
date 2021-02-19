import '../styles/post.scss'
import React from 'react'
import like from '../icons/like.svg'
import CreateComment from './CreateComment'
import Comments from './Comments'

const Post= ({post})=>{
    return(
        post && <div className='post'>
            <h2>{post.heading}</h2>
            <div className='post-user-container'>
                <img src={post.photoURL}></img>
            </div>
            <p>{post.describe}</p>
            <div className='reactions-container'>
                <p><img src={like}></img> {post.like}</p>
                <p><img src={like} className='unlike'></img> {post.unlike}</p>
            </div>
            <CreateComment id={post.id}/>
            <Comments post={post}/>

        </div>
    )
}
export default Post
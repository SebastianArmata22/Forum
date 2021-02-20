import '../styles/post.scss'
import React from 'react'
import like from '../icons/like.svg'
import CreateComment from './CreateComment'
import Comments from './Comments'
import {postsCollection} from '../firebase/firebase'


const Post= ({post,parentCallback})=>{

    return(
        post && <div className='post'>
            <h2>{post.heading}</h2>
            <div className='post-user-container'>
                <img src={post.photoURL}></img>
                <div>
                    <p>Started by <span>{post.displayName}</span></p>
                    <p>on {post.createdAt.toDate().toDateString()}</p>
                </div>
            </div>
            <p>{post.describe}</p>
            <CreateComment id={post.id}/>
            <Comments post={post}/>

        </div>
    )
}
export default Post
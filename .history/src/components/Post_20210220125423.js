import '../styles/post.scss'
import React from 'react'
import like from '../icons/like.svg'
import CreateComment from './CreateComment'
import Comments from './Comments'
import {postsCollection} from '../firebase/firebase'


const Post= ({post})=>{
    postsCollection.doc(post.id).get().then((doc)=>{
        if(doc.exists){
            console.log({...doc.data(), id: doc.id})
        }
    })
    const addLike=async ()=>{
        await postsCollection.doc(post.id).update({
            like: post.like+1
        })
    }
    const addUnlike=async ()=>{
        await postsCollection.doc(post.id).update({
            unlike: post.unlike+1
        })
    }
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
            <div className='reactions-container'>
                <p onClick={addLike}><img src={like}></img> {post.like}</p>
                <p onClick={addUnlike}><img src={like} className='unlike'></img> {post.unlike}</p>
            </div>
            <CreateComment id={post.id}/>
            <Comments post={post}/>

        </div>
    )
}
export default Post
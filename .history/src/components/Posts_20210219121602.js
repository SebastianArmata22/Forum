import '../styles/posts.scss'
import React from 'react'
import ShortPost from './ShortPost'
import {postsCollection} from '../firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';


const Posts= ({category,parentCallback,handleCallbackisCreatePost}) =>{
    
    const queryToBase = postsCollection.where("category","==",category.id)
    const [posts] = postsCollection.where("category","==",category.id).get()
    console.log(postsCollection.where("category","==",category.id).get())
    // useCollectionData (queryToBase, {idField: 'id'})
    const setHandleCallbackisCreatePost=()=>{
        handleCallbackisCreatePost()
    }
    return(
        <div className='posts-container'>
            <div className='posts-general'>
                <h2>{category.name}</h2>
                <div>
                    <input type='text' placeholder='Search...'></input>
                    <button onClick={setHandleCallbackisCreatePost}>+ Create post</button>
                </div>
            </div>
            <div className='posts'>
                {posts && posts.map(post=> <ShortPost key={post.id} post={post} parentCallback={parentCallback} handleCallbackisCreatePost={handleCallbackisCreatePost}/>) }
            </div>
        </div>
    )
}
export default Posts
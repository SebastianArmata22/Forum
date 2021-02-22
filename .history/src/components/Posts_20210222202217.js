import '../styles/posts.scss'
import React from 'react'
import ShortPost from './ShortPost'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {postsCollection} from '../firebase/firebase'


const Posts=({category,parentCallback,handleCallbackisCreatePost,choosePost}) =>{
    const queryToBase = postsCollection.where("category","==",category.id)
    const [posts] = useCollectionData (queryToBase, {idField: 'id'})

    const setHandleCallbackisCreatePost=()=>{
        handleCallbackisCreatePost(true)
    }

    return(
        <div className='posts-container'>
            <div className='posts-general'>
                <h2>{category.name}</h2>
                <div>
                    <button onClick={setHandleCallbackisCreatePost}>+ Create post</button>
                </div>
            </div>
            <div className='posts'>
                {posts && posts.map(post=> <ShortPost key={post.id} post={post} parentCallback={parentCallback} handleCallbackisCreatePost={handleCallbackisCreatePost} choosePost={choosePost} />) }
            </div>
        </div>
    )
}
export default Posts
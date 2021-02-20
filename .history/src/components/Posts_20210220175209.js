import '../styles/posts.scss'
import React, { useState, useEffect} from 'react'
import ShortPost from './ShortPost'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {postsCollection} from '../firebase/firebase'


const Posts= ({category,parentCallback,handleCallbackisCreatePost}) =>{
    const [searchValue ,setSearch]=useState('')
    const [queryToBase, SetQueryToBase] = useState(postsCollection.where("category","==",category.id)) 
    const [posts] = useCollectionData (queryToBase, {idField: 'id'})
    const setHandleCallbackisCreatePost=()=>{
        handleCallbackisCreatePost()
    }
    const changeSearch=(e)=>{
        setSearch(e.targetValue)
        SetQueryToBase(postsCollection.where("category","==",category.id && "heading", "==",  searchValue))
    }
    return(
        <div className='posts-container'>
            <div className='posts-general'>
                <h2>{category.name}</h2>
                <div>
                    <input type='text' placeholder='Search...' value={searchValue} onChange={(e)=>changeSearch(e)}></input>
                    <button onClick={setHandleCallbackisCreatePost}>+ Create post</button>
                </div>
            </div>
            <div className='posts'>
                {posts && posts.map(post=> <ShortPost key={post.id} post={post} parentCallback={parentCallback} handleCallbackisCreatePost={handleCallbackisCreatePost} />) }
            </div>
        </div>
    )
}
export default Posts
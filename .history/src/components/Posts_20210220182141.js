import '../styles/posts.scss'
import React, { useState, useEffect} from 'react'
import ShortPost from './ShortPost'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {postsCollection} from '../firebase/firebase'


const Posts= ({category,parentCallback,handleCallbackisCreatePost}) =>{
    const [searchValue ,setSearch]=useState('')
    const queryToBase = postsCollection.where("category","==",category.id) 
    const [posts] = useCollectionData (queryToBase, {idField: 'id'})
   console.log(posts)
    const [po, setPo]=useState([...posts])
    console.log("po",po)

    const setHandleCallbackisCreatePost=()=>{
        handleCallbackisCreatePost()
    }
    const changeSearchValue=(e)=>{
        setSearch(e)
        setPo(posts.find((post)=>{
            return post.heading===searchValue
        }))
    }
    return(
        <div className='posts-container'>
            <div className='posts-general'>
                <h2>{category.name}</h2>
                <div>
                    <input type='text' placeholder='Search...' value={searchValue} onChange={(e)=>changeSearchValue(e.target.value)}></input>
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
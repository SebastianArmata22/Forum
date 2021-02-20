import '../styles/forum.scss'
import React, { useState } from 'react'
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import categoryNames from '../data/categoryNames'
import CreatePost from './CreatePost';


const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(categoryNames[0])
    const [isCreatePost, setIsCreatePost]=useState(true)
    const [choosePost, setChoosePost]=useState(null)
    const queryToBase = postsCollection.where("category","==",chooseCategory.id)
    const handleCallbackCategory=(category)=>{
        setChooseCategory(category)
    }
    const handleCallbackPost=(post)=>{
        setChoosePost(post)
    }
    const handleCallbackisCreatePost=(value=!isCreatePost)=>{
        setIsCreatePost(value)
    }
    return(
        <div className='forum-container'>
            <div className='profile-category-container'>
                <Profile />
                <Categories parentCallback = {handleCallbackCategory} />
            </div>
            <Posts category={chooseCategory} parentCallback={handleCallbackPost} handleCallbackisCreatePost={handleCallbackisCreatePost} queryToBase={queryToBase}}/>
            {isCreatePost ? <CreatePost category={chooseCategory}/> : <Post post={choosePost} parentCallback={handleCallbackPost}/>}
        </div>
    )
}
export default Forum
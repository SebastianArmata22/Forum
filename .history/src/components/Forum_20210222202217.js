import '../styles/forum.scss'
import React, { useState } from 'react'
import categoryNames from '../data/categoryNames'
//components
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost';



const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(categoryNames[0])
    const [isCreatePost, setIsCreatePost]=useState(null)
    const [choosePost, setChoosePost]=useState(null)
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
                <Categories parentCallback = {handleCallbackCategory} chooseCategory={chooseCategory}/>
            </div>
            <Posts category={chooseCategory} parentCallback={handleCallbackPost} handleCallbackisCreatePost={handleCallbackisCreatePost} choosePost={choosePost} />
            <div className='third-container'>
            {isCreatePost ? <CreatePost category={chooseCategory} setIsCreatePost={setIsCreatePost}/> : isCreatePost!==null && <Post post={choosePost} parentCallback={handleCallbackPost}/>}
            </div>
        </div>
    )
}
export default Forum
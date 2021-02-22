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
    const [isCreatePost, setIsCreatePost]=useState(null)
    const [choosePost, setChoosePost]=useState(null)
    console.log(choosePost)
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
            {isCreatePost ? <CreatePost category={chooseCategory} setIsCreatePost={setIsCreatePost}/> : isCreatePost!==null && <Post post={choosePost} parentCallback={handleCallbackPost}/>}
        </div>
    )
}
export default Forum
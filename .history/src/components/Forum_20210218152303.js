import '../styles/forum.scss'
import React, { useState } from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import categoryNames from '../data/categoryNames'
import CreatePost from './CreatePost';


const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(categoryNames[0])
    const [isCreatepost, setIsCreatePost]=useState(false)
    const handleCallbackCategory=(category)=>{
        setChooseCategory(category)
    }
    const [choosePost, setChoosePost]=useState(null)
    const handleCallbackPost=(post)=>{
        setChoosePost(post)
    }
    return(
        <div className='forum-container'>
            <div className='profile-category-container'>
                <Profile />
                <Categories parentCallback = {handleCallbackCategory} />
            </div>
            <Posts category={chooseCategory} parentCallback={handleCallbackPost}/>
            {isCreatepost ? <CreatePost category={chooseCategory}/> : <Post post={choosePost}/>}
        </div>
    )
}
export default Forum
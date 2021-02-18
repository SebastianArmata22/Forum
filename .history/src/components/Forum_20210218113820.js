import React, { useState } from 'react'
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'

const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(1)
    const handleCallbackCategory=(id)=>{
        setChooseCategory(id)
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
            <Post post={choosePost}/>
        </div>
    )
}
export default Forum
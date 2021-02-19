import '../styles/forum.scss'
import React, { useState } from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import categoryNames from '../data/categoryNames'


const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(categoryNames[0])
    console.log(chooseCategory);
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
            <Router>
            <Route path="/" exact={true} component={choosePost} />
            </Router>
        </div>
    )
}
export default Forum
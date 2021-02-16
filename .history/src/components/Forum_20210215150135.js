import React, { useState } from 'react'
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'

const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(1)
    const handleCallback=(id)=>{
        setChooseCategory(id)
    }
    console.log("category: ",chooseCategory)
    return(
        <>
            <div>
                <Profile />
                <Categories parentCallback = {handleCallback} />
            </div>
            <Posts/>
            <Post />
        </>
    )
}
export default Forum
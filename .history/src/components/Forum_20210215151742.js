import React, { useState } from 'react'
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'

const Forum= ()=>{
    const [chooseCategory, setChooseCategory]=useState(1)
    console.log(chooseCategory)
    return(
        <>
            <div>
                <Profile />
                <Categories />
            </div>
            <Posts/>
            <Post />
        </>
    )
}
export default Forum
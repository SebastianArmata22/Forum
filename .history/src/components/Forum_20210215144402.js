import React from 'react'
import Profile from './Profile'
import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'

const Forum= ()=>{
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
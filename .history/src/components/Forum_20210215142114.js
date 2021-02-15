import React from 'react'
import Profile from './Profile'
import Category from './Category'
import Posts from './Posts'
import Post from './Post'

const Forum= () =>{
    return(
        <>
            <div>
                <Profile />
                <Category />
            </div>
            <Posts/>
            <Post />
        </>
    )
}
export default Forum
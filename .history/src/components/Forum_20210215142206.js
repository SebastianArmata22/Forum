import React from 'react'
import Profile from './Profile'
import Category from './Category'
import Posts from './Posts'
import Post from './Post'

const Forum= () =>{
    return(
        <div>
            <div>
                <Profile />
                <Category />
            </div>
            <Posts/>
            <Post />
        </div>
    )
}
export default Forum
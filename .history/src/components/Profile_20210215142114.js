import React from 'react'
import {auth} from '../firebase/auth'
import LogOut from './LogOut'

const Profile= () =>{
    const profile=auth.currentUser
    return(
        <div>
            <img src={profile.photoURL} alt='profile'></img>
            <p>{profile.displayName}</p>
            <p>{profile.email}</p>
            <LogOut />
        </div>
    )
}
export default Profile
import '../styles/profile.scss'
import React from 'react'
import {auth} from '../firebase/auth'
import LogOut from './LogOut'

const Profile= () =>{
    const profile=auth.currentUser
    return(
        <div>
            <div className='profile-container'>
                <img src={profile.photoURL} alt='profile'></img>
                <p>{profile.displayName}</p>
                <p>{profile.email}</p>
            </div>
            <LogOut />
        </div>
    )
}
export default Profile
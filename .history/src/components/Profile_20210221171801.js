import '../styles/profile.scss'
import React from 'react'
import {auth} from '../firebase/auth'
import LogOut from './LogOut'
import guest from '../images/guest.png'

const Profile= () =>{
    const profile=auth.currentUser
    console.log(auth.currentUser.displayName)
    return(
        <div className='profile-container'>
            <div className='user-container'>
                <img src={profile.photoURL ? profile.photoURL : guest} alt='profile'></img>
                <p>{profile.displayName || profile.email ? profile.displayName || profile.email : 'Guest'}</p>
            </div>
            <LogOut />
        </div>
    )
}
export default Profile
import React from 'react'
import {auth, providerFacebook, providerGithub, providerGoogle} from '../firebase/auth'

const SignIn= ()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providerGoogle)
    }
    const signInWithGitHub=()=>{
        auth.signInWithPopup(providerGithub)
    }
    const signInWithFacebook=()=>{
        auth.signInWithPopup(providerFacebook)
    }
    return(
        <div >
            <div>
                <button  onClick={signInWithGoogle}>
                    <img src={google} alt='google'></img>
                    <p>Sign in with Google</p>
                </button>
                <button  onClick={signInWithGitHub}>
                    <img src={github} alt='gitHub'></img>
                    <p>Sign in with GitHub</p>
                </button>
                <button  onClick={signInWithFacebook}>
                    <img src={fb} alt='facebook'></img>
                    <p>Sign in with Facebook</p>
                    </button>
            </div>
        </div>
    )
}
export default SignIn
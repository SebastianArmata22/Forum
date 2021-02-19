import React from 'react'
import { useState } from 'react'
const CreateComment=({id})=>{
    const [comment, setComment]=useState('')
    const changeComment=(e)=>{
        setComment(e.target.value)
    }
    const addComment=(e)=>{
        e.preventDefault()
    }
    return(
        <div>
            <fotm>
            <form onSubmit={addComment}>
                <input type='text' className='' value={comment} onChange={e=>changeComment(e)} placeholder='Comment...'></input>
                <input type='submit' value='Add'></input>
            </form>
            </fotm>
        </div>
    )
}
export default CreateComment
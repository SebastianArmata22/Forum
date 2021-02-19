import React from 'react'
import {postsCollection} from '../firebase/firebase'

const Comments=({post})=>{
    const queryToBase = postsCollection.doc(post.id).collection('comments')
    const [comments] = useCollectionData (queryToBase, {idField: 'id'})
    console.log("comm ", comments);

    console.log(post)
    return(
        <div></div>

    )
}
export default Comments
import React from 'react'
import {postsCollection} from '../firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Comment from './Comment';


const Comments=({post})=>{
    const queryToBase = postsCollection.doc(post.id).collection('comments')
    const [comments] = useCollectionData (queryToBase, {idField: 'id'})
    console.log("comm ", comments);

    console.log(post)
    return(
        <div>
            {comments && comments.map(comment=> <Comment comment={comment}/>)}
        </div>

    )
}
export default Comments
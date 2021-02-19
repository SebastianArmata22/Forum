import '../styles/posts.scss'
import React from 'react'
import CreatePost from './CreatePost'
import ShortPost from './ShortPost'
import {postsCollection} from '../firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';


const Posts= ({category,parentCallback}) =>{
    const queryToBase = postsCollection.where("category","==",category)
    const [posts] = useCollectionData (queryToBase, {idField: 'id'});
    return(
        <div className='posts-container'>
            <div>
                <h2>{category}</h2>
            </div>
            <CreatePost category={category}/>
            {posts && posts.map(post=> <ShortPost key={post.id} post={post} parentCallback={parentCallback}/>) }
        </div>
    )
}
export default Posts
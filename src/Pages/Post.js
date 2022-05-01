import React, { useState } from 'react'
import { UserAuth } from '../utlits/AuthContext';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import '../css/Post.css'


const Post = () => {
    const {user} = UserAuth()
    const [url, setUrl] = useState('')
    const [bio, setBio] = useState('')
    const date = new Date();
    const postCollectionRef = doc(db, 'posts', user.displayName+' '+bio)
    //send datat

    
    //send datat
    const createPost = async (e) => {
        await setDoc(postCollectionRef, {
            name:user.displayName, imageUrl:url , bio:bio, userAvatar:user.photoURL, date:date.toLocaleDateString('en-US')
        })
        window.location.pathname = '/'
    }

  return (
    <div className='post'>
        <input placeholder='past a image url' type={'text'}
        onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <br />
        <input placeholder='whats your bio' type={'text'}
        onChange={(e) => setBio(e.target.value)}
        />
        <br />
        <br />
        <button onClick={createPost}>Post Now</button>
    </div>
    )
}

export default Post
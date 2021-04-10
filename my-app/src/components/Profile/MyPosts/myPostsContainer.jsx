import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text))
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                 postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer
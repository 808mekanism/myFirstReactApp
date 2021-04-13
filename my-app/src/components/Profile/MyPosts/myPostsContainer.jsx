import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
 return {
     updateNewPostText:  (text) => {
         dispatch(updatePostTextActionCreator(text))
     },
     addPost: () => {
         dispatch(addPostActionCreator())
     }

 }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
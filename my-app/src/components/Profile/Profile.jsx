import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts className={styles.myPosts} newPostText={props.postData.newPostText} postData={props.postData} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>

    )
}

export default Profile;
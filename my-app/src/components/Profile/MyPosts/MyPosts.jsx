import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let mappedPostData = props.postData.map(post => <Post message={post.message} likes={post.likesCount}/>)
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {mappedPostData}
        </div>
            </div>
    )
}

export default MyPosts;
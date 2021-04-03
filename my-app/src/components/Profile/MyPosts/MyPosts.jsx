import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let mappedPostData = props.postData.postData.map(post => <Post message={post.message} likes={post.likesCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updatePostTextActionCreator(text))
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {mappedPostData}
            </div>
        </div>
    )
}

export default MyPosts;
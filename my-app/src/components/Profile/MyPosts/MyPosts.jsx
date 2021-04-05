import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let mappedPostData = props.postData.map(post => <Post message={post.message} likes={post.likesCount}/>)
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.postData.newPostText}> </textarea>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {mappedPostData}
            </div>
        </div>
    )
}

export default MyPosts;
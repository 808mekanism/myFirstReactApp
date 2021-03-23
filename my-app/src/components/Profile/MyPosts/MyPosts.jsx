import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let mappedPostData = props.postData.map(post => <Post message={post.message} likes={post.likesCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        newPostElement.current.value = ''
        props.addPost(text)

    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={ newPostElement }> </textarea>
                <div>
                <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {mappedPostData}
        </div>
            </div>
    )
}

export default MyPosts;
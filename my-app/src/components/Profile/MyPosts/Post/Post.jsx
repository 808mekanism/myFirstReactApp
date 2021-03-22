import React from "react";
import styles from './Post.module.css';
import state from "../../../../redux/state";

const Post = (props) => {
    return (

        <div className={styles.item}>
            <div>
                <img src="https://forum.truckersmp.com/uploads/monthly_2019_06/imported-photo-186659.thumb.jpeg.7ca80c40fa6e972e04cc2f14f5114d80.jpeg" alt="avatar"/>
            </div>
            {props.message}
            <div>
                likes: {props.likes}
            </div>

        </div>

    )
}

export default Post;
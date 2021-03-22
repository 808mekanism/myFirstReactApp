import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZTPBifRk4nLz9dLqgKsJxFIkt8HgzGfqNQ&usqp=CAU"
                    alt="upper_photo"/>
                <div>
                    AVA + DESCRIPTION
                </div>
            </div>
            </div>
    )
}

export default ProfileInfo;
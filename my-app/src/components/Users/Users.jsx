import React from "react";
import styles from '../Users/users.module.css'


const Users = (props) => {
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div><img src={user.avatarUrl} className={styles.userAvatar}/>
                    </div>
                    <div>
                       {user.followed
                           ? <button onClick={ () => {props.unfollow(user.id)} }>Follow</button>
                           : <button onClick={ () => {props.follow(user.id)}}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
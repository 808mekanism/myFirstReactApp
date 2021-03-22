import React from "react";
import styles from '../Navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    let mappedFriends = props.friends.map(friend => <Sidebar name={friend.name} id={friend.id} avatar={friend.avatarSource}/>)
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/messages" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
            <div className={styles.friends}>
                <div>FRIENDS</div>
                {mappedFriends}
            </div>
        </nav>
    )
}

export default Navbar;
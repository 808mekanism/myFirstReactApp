import React from "react";
import styles from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarItem}>
            <img className={styles.avatar} src={props.avatar} alt="avatar"/>
            {props.name}
            </div>
        </div>
    )
}
export default Sidebar;
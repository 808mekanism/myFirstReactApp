import React from "react";
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/messages/' + props.id
    return (
        <div className={styles.dialogItem}>
            <img className={styles.avatar} src={props.avatar} alt="dialogAvatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>


    )
}

export default Dialog;
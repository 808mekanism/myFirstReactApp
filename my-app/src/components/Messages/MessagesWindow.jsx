import React from 'react';
import styles from './MessagesWindow.module.css'
import Dialog from "./Dialogs/Dialog";
import Message from "./Message/Message";

const MessagesWindow = (props) => {
    let mappedDialogData = props.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatarSource}/>)
    let mappedMessages = props.message.map(message => <Message message={message.message}/>)


    return (
        <div className={styles.messagesContent}>
            <div className={styles.dialogs}>
                {mappedDialogData}
            </div>
            <div className={styles.messages}>
                {mappedMessages}
            </div>
            </div>
    )
}

export default MessagesWindow;
import React from 'react';
import styles from './MessagesWindow.module.css'
import Dialog from "./Dialogs/Dialog";
import Message from "./Message/Message";

const MessagesWindow = (props) => {

    let mappedDialogData = props.userData.map(dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatarSource}/>)
    let mappedMessages = props.message.map(message => <Message message={message.message}/>)
    let newMessageElement = React.createRef()

    let onTextMessageChange = () => {
        let text = newMessageElement.current.value
        props.onTextMessageChange(text)
    }

    let addMessage = () => {
        props.addMessage()
    }


    return (
        <div className={styles.messagesContent}>
            <div className={styles.dialogs}>
                {mappedDialogData}
            </div>
            <div className={styles.messages}>
                {mappedMessages}
                <div>
                    <textarea ref={newMessageElement} onChange={onTextMessageChange} value={props.newMessageText}> </textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
            </div>
    )
}

export default MessagesWindow;
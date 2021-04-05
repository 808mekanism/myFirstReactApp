import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/message-window-reducer";
import MessagesWindow from "./MessagesWindow";

const MessagesWindowContainer = (props) => {

    let state = props.store.getState()


    let onTextMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text))
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }


    return (
        <MessagesWindow addMessage={addMessage} onTextMessageChange={onTextMessageChange}
                        userData={state.messagesWindow.userData}
                        message={state.messagesWindow.messages}
                        newMessageText={state.messagesWindow.newMessageText}/>
    )
}

export default MessagesWindowContainer;
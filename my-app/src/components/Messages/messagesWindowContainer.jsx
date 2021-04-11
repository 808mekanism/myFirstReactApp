import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/message-window-reducer";
import MessagesWindow from "./MessagesWindow";
import {connect} from "react-redux";

/*const MessagesWindowContainer = (props) => {

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
}*/

let mapStateToProps = (state) => {
    return {
        userData: state.messagesWindow.userData,
        message: state.messagesWindow.messages,
        newMessageText: state.messagesWindow.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onTextMessageChange: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

const MessagesWindowContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesWindow);

export default MessagesWindowContainer;
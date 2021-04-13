import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/message-window-reducer";
import MessagesWindow from "./MessagesWindow";
import {connect} from "react-redux";


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
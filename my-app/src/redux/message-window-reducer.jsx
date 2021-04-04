const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const messageWindowReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        state.newMessageText = action.newText
    }
    return state
}

export default messageWindowReducer





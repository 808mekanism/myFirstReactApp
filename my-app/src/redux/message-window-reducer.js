const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {userData: [
        {
            name: 'Mike',
            id: 1,
            avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpRxV2tcx9wtnuGsnV2-RSAIUX2pF6fuXwg&usqp=CAU'
        },
        {
            name: 'David',
            id: 2,
            avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6im7lK8hccrEWsTm2vcRpD1MAXQdySNklA&usqp=CAU'
        },
        {
            name: 'Sara',
            id: 3,
            avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPyLojKz7-P2jf3ZYFiY39NT0X8CrFsqKdg&usqp=CAU'
        },
        {
            name: 'Michele',
            id: 4,
            avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU'
        },
        {
            name: 'Diana',
            id: 5,
            avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC7L9L-A8G_Cb2y4I5jBBVEt-lD1tfxdX8Q&usqp=CAU'
        }
    ],
    messages: [
        {message: "Hi"},
        {message: "How are you?"},
        {message: "Maybe we will do something with project?"},
        {message: "Yo. I will write message to you soon"}
    ],
    newMessageText: 'add message'}

const messageWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text

    }
}


export default messageWindowReducer





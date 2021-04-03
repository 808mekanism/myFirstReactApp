const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi there', likesCount: 11},
                {id: 2, message: 'This is my first react app', likesCount: 12},
                {id: 3, message: 'I am very happy to do this project', likesCount: 33},
                {id: 4, message: 'This posts will be update in short time', likesCount: 51}
            ],
            newPostText: 'it-incubator'
        },
        messagesWindow: {
            userData: [
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
            newMessageText: 'add message'
        },
        sidebar: {
            friends: [
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
            ]
        }
    },
    _callSubscriber() {
        console.log('hi')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.messagesWindow.newMessageText
            }
            this._state.messagesWindow.messages.push(newMessage)
            this._state.messagesWindow.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.messagesWindow.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text

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


window.store = store
export default store
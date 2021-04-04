const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {postData: [
        {id: 1, message: 'Hi there', likesCount: 11},
        {id: 2, message: 'This is my first react app', likesCount: 12},
        {id: 3, message: 'I am very happy to do this project', likesCount: 33},
        {id: 4, message: 'This posts will be update in short time', likesCount: 51}
    ],
    newPostText: 'it-incubator'}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
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

export default profilePageReducer
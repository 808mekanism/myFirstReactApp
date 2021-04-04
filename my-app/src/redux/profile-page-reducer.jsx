const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profilePageReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        state.postData.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}

export default profilePageReducer
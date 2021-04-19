const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, avatarUrl: 'https://lh3.googleusercontent.com/proxy/u8WoVPb3Xvh99hYnWL7CZ2fqfWo8BxXsj9UL-hcJkJrAGlIuTZEzXzDdnoIut_QIMLyYbI4xlMohJ5N0DOHJx4iXn9_MK9jVGkW3fJf6zA40K2m0vaLMJ8PYjA', followed: true, fullName: 'Eugene', status: 'Hello, I am part of first-react-app', location: {city: 'Tuapse', country: 'Russian Federation'}},
        {id: 2, avatarUrl: 'https://lh3.googleusercontent.com/proxy/u8WoVPb3Xvh99hYnWL7CZ2fqfWo8BxXsj9UL-hcJkJrAGlIuTZEzXzDdnoIut_QIMLyYbI4xlMohJ5N0DOHJx4iXn9_MK9jVGkW3fJf6zA40K2m0vaLMJ8PYjA', followed: false, fullName: 'Victor', status: 'Hello, I am part of first-react-app', location: {city: 'Sochi', country: 'Russian Federation'}},
        {id: 3, avatarUrl: 'https://lh3.googleusercontent.com/proxy/u8WoVPb3Xvh99hYnWL7CZ2fqfWo8BxXsj9UL-hcJkJrAGlIuTZEzXzDdnoIut_QIMLyYbI4xlMohJ5N0DOHJx4iXn9_MK9jVGkW3fJf6zA40K2m0vaLMJ8PYjA', followed: true, fullName: 'Alexander', status: 'Hello, I am part of first-react-app', location: {city: 'Moscow', country: 'Russian Federation'}},
        {id: 4, avatarUrl: 'https://lh3.googleusercontent.com/proxy/u8WoVPb3Xvh99hYnWL7CZ2fqfWo8BxXsj9UL-hcJkJrAGlIuTZEzXzDdnoIut_QIMLyYbI4xlMohJ5N0DOHJx4iXn9_MK9jVGkW3fJf6zA40K2m0vaLMJ8PYjA', followed: false, fullName: 'Ivan', status: 'Hello, I am part of first-react-app', location: {city: 'Moscow', country: 'Russian Federation'}},
        {id: 5, avatarUrl: 'https://lh3.googleusercontent.com/proxy/u8WoVPb3Xvh99hYnWL7CZ2fqfWo8BxXsj9UL-hcJkJrAGlIuTZEzXzDdnoIut_QIMLyYbI4xlMohJ5N0DOHJx4iXn9_MK9jVGkW3fJf6zA40K2m0vaLMJ8PYjA', followed: true, fullName: 'Andrey', status: 'Hello, I am part of first-react-app', location: {city: 'Moscow', country: 'Russian Federation'}},
        {id: 6, avatarUrl: 'https://lh3.googleusercontent.com/proxy/u8WoVPb3Xvh99hYnWL7CZ2fqfWo8BxXsj9UL-hcJkJrAGlIuTZEzXzDdnoIut_QIMLyYbI4xlMohJ5N0DOHJx4iXn9_MK9jVGkW3fJf6zA40K2m0vaLMJ8PYjA', followed: false, fullName: 'Julia', status: 'Hello, I am part of first-react-app', location: {city: 'Sochi', country: 'Russian Federation'}}
    ]

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
                    return {
                     ...state,
                        users: [...state.users, ...action.users]
                    }
        default:
            return state

    }
};


export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
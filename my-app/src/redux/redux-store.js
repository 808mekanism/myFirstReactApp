import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-page-reducer";
import messageWindowReducer from "./message-window-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({profilePage: profilePageReducer,
                                        messagesWindow: messageWindowReducer,
                                        sidebar: sidebarReducer,
                                        usersPage: usersReducer})

let store = createStore(reducers)


export default store
window.store = store;
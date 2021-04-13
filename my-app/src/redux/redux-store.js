import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-page-reducer";
import messageWindowReducer from "./message-window-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({profilePage: profilePageReducer,
                                        messagesWindow: messageWindowReducer,
                                        sidebar: sidebarReducer})

let store = createStore(reducers)


export default store
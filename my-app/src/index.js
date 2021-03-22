import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from "./components/Messages/Dialogs/Dialog";
import Post from "./components/Profile/MyPosts/Post/Post";
import Message from "./components/Messages/Message/Message";
import state from "./redux/state";

/*
let postData = [
    {message: 'Hi there', likesCount: 111},
    {message: 'This is my first react app', likesCount: 12312},
    {message: 'I am very happy to do this project', likesCount: 321321},
    {message: 'This posts will be update in short time', likesCount: 33333}
]

let dialogData = [
    {name: 'Mike', id: 1},
    {name: 'David', id: 2},
    {name: 'Sara', id: 3},
    {name: 'Michele', id: 4},
    {name: 'Diana', id: 5}
]

let messages = [
    {message: "Hi"},
    {message: "How are you?"},
    {message: "Maybe we will do something with project?"},
    {message: "Yo. I will write message to you soon"},


]
*/

/*
let mappedMessages = state.messages.map(message => <Message message={message.message}/>)

let mappedDialogData = state.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

let mappedPostData = state.postData.map(post => <Post message={post.message} likes={post.likesCount}/>)
*/

ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, updatePostText} from "./redux/state";



let rerenderReactApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

 export default rerenderReactApp;
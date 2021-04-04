import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from "./redux/redux-store";

let rerenderReactApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderReactApp(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderReactApp(state)
})






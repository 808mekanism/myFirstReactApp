import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderReactApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App /> {/*store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}*/}
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderReactApp(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderReactApp(state)
})






import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MessagesWindow from "./components/Messages/MessagesWindow";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile postData={props.state.profilePage.postData} dispatch={props.dispatch}/>} />
                    <Route path='/messages' render={() => <MessagesWindow userData={props.state.messagesWindow.userData} dispatch={props.dispatch}
                                                                          message={props.state.messagesWindow.messages}
                                                                          newMessageText={props.state.messagesWindow.newMessageText}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {Switch, withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    catchAllErrors = (reason, promise) => {
        alert("Some error")
    };
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("error", this.catchAllErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("error", this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                <Route exact path='/' render={() => <ProfileContainer/>} />
                                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                </Switch>
                            </Suspense>

                            <Route path="/users" render={() => <UsersContainer/>}/>

                            <Route path="/news" render={() => <News/>}/>

                            <Route path="/music" render={() => <Music/>}/>

                            <Route path="/settings" render={() => <Settings/>}/>

                            <Route path="/login" render={() => <Login/>}/>

                        </div>
                    </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
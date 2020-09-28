import React from "react";
import {Redirect, Route} from "react-router";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return (
                <Route>
                    <Redirect to="/login"/>
                </Route>

            );
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return (
        ConnectedAuthRedirectComponent
    );
};
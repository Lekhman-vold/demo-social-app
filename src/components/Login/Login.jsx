import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Route} from "react-router-dom";
import {Redirect} from "react-router";
import style from './../common/FormsControls/FormsControls.module.css'

const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(6);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field  placeholder={"Email"}
                            name={"email"}
                            component={Input}
                            validate={[required, maxLength]}
                    />
                </div>
                <div>
                    <Field
                        placeholder={"Password"}
                        name={"password"}
                        type={"password"}
                        component={Input}
                        validate={[required, minLength]}
                    />
                </div>
                <div>
                    <Field component={Input}
                           name={"rememberMe"}
                           type={"checkbox"}
                    /> remember me
                </div>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {}) }
                {error && <div className={style.formErrorControl}>
                    {error}
                </div>}
                <div>
                    <button className="btn btn-outline-dark" >Log In</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if(props.isAuth) {
        return (
            <Route>
                <Redirect to={"/profile"}/>
            </Route>
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login);
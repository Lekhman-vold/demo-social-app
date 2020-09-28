import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { RocketIcon} from '@primer/octicons-react'

const Header = (props) => {
    return (
        <header className={s.header}>
            <RocketIcon size={45}  />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button className="btn btn-outline-dark" onClick={props.logout}>Log out</button>
                </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;

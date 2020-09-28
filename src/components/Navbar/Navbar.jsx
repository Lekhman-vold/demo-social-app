import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className="text-light"  >Profile</NavLink>
            </div>
            <div >
                <NavLink to="/dialogs" className="text-light ">Messages</NavLink>
            </div>
            <div >
                <NavLink to="/users" className="text-light " >Users</NavLink>
            </div>
            <div>
                <NavLink to="/news" className="text-light ">News</NavLink>
            </div>
            <div >
                <NavLink to="/music" className="text-light ">Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className="text-light ">Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;







import React from "react";
import cl from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={cl.nav}>
            <NavLink className={cl.link} activeClassName={cl.activeLink} to="/profile">Profile</NavLink>
            <NavLink className={cl.link} activeClassName={cl.activeLink} to="/dialogs">Messages</NavLink>
            <NavLink className={cl.link} activeClassName={cl.activeLink} to="/users">Users</NavLink>
            <NavLink className={cl.link} activeClassName={cl.activeLink} to="/news">News</NavLink>
            <NavLink className={cl.link} activeClassName={cl.activeLink} to="/music">Music</NavLink>
            <NavLink className={cl.link} activeClassName={cl.activeLink} to="/settings">Settings</NavLink>
        </nav>
    )
}

export default Nav;
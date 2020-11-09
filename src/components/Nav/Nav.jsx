import React from "react";
import cl from "./Nav.module.css";


const Nav = () => {
   return <nav className={cl.nav}>
        <a className={cl.link} href="#">Profile</a>
        <a className={cl.link} href="#">Messages</a>
        <a className={cl.link} href="#">News</a>
        <a className={cl.link} href="#">Music</a>
        <a className={cl.link} href="#">Settings</a>
    </nav>
}

export default Nav;
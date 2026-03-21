import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from "./Navbar.module.css"
import MyButton from "../button/MyButton.jsx";
import {AuthContext} from "../../../context/index.js";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={cl.navbar}>
            {isAuth &&
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            }
            <div className={cl.navbar__links}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
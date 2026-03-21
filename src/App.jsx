import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/index.js";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>

                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;

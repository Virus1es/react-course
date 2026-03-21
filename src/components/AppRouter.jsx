import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts.jsx";
import {privateRoutes, publicRoutes} from "../router/routes.js";
import Login from "../pages/Login.jsx";

const AppRouter = () => {
    const isAuth = true;

    return (
        isAuth ?
            <Routes>
                <Route path="/" element={<Posts/>}/>
                {privateRoutes.map((route, index) =>
                    <Route
                        key={`private-${index}`}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
            </Routes>
        :
            <Routes>
                <Route path="/" element={<Login/>}/>
                {publicRoutes.map((route, index) =>
                    <Route
                        key={`public-${index}`}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;
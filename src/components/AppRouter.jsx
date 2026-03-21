import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts.jsx";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="posts" element={<Posts/>}/>
            <Route path="posts/:id" element={<PostIdPage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;
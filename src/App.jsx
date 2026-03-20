import React from "react";
import './styles/App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">О сайте</Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div>
            <Routes>
                <Route path="posts" element={<Posts/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

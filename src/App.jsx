import React from "react";
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="posts" element={<Posts/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

import React from "react";
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/UI/navbar/Navbar.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="posts" element={<Posts/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

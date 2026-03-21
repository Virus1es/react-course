import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Error from "../pages/Error.jsx";
import Login from "../pages/Login.jsx";

export const privateRoutes = [
    {path: '/posts',     element: Posts},
    {path: '/posts/:id', element: PostIdPage},
    {path: '/about',     element: About},
    {path: '*', element: Error},
]

export const publicRoutes = [
    {path: '/login',     element: Login},
]
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Error from "../pages/Error.jsx";

export const routes = [
    {path: '/about',     element: About},
    {path: '/posts',     element: Posts},
    {path: '/posts/:id', element: PostIdPage},
    {path: '*', element: Error},
]
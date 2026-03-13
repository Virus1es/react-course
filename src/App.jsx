import React, {useRef, useState} from "react";
import Counter from "./components/Counter.jsx";
import '../styles/app.css';
import PostList from "./components/PostList.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import PostForm from "./components/PostForm.jsx";

function App() {
    const [value, setValue] = useState('Some string');

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования'
        },
        {
            id: 2,
            title: 'Java',
            body: 'Java - язык программирования'
        },
        {
            id: 3,
            title: 'C#',
            body: 'C# - язык программирования'
        },
        {
            id: 4,
            title: 'C++',
            body: 'C++ - язык программирования'
        },
    ])

    const createPost = (newPost) => setPosts([...posts, newPost]);

    return (
        <div className="App">
            <h3>{value}</h3>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
            <Counter/>
            <PostForm create={createPost}/>
            <PostList title={'Список постов'} posts={posts}/>
        </div>
    )
}

export default App;

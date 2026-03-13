import React, {useState} from "react";
import Counter from "./components/Counter.jsx";
import '../styles/app.css';
import PostItem from "./components/PostItem.jsx";

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

    return (
        <div className="App">
            <h3>{value}</h3>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
            <Counter/>
            <h1 style={{textAlign: 'center'}}>Список постов</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default App;

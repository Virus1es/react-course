import React, {useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./components/PostList.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";
import PostFilter from "./components/PostFilter.jsx";

function App() {
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
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    },[filter.query, sortedPosts]);

    const createPost = (newPost) => setPosts([...posts, newPost]);

    const deletePost = (postId) => setPosts(posts.filter(post => post.id !== postId));

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                sortedAndSearchedPosts.length !== 0 ?
                <PostList deletePost={deletePost} title={'Список постов'} posts={sortedAndSearchedPosts}/>
                :
                    <h2 style={{textAlign: 'center'}}>
                        Список постов пуст
                    </h2>
            }

        </div>
    )
}

export default App;

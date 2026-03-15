import React, {useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./components/PostList.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";

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

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const createPost = (newPost) => setPosts([...posts, newPost]);

    const deletePost = (postId) => setPosts(posts.filter(post => post.id !== postId));

    const sortPost = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder="Поиск..."
                    value={searchQuery}
                    onCahnge={e => setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body',  name: 'По описанию'},
                    ]}
                />
            </div>
            {
                posts.length !== 0 ?
                <PostList deletePost={deletePost} title={'Список постов'} posts={sortedPosts}/>
                :
                    <h2 style={{textAlign: 'center'}}>
                        Список постов пуст
                    </h2>
            }

        </div>
    )
}

export default App;

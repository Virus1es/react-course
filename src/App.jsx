import React, {useEffect, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePosts} from "./hooks/usePosts.js";
import axios from "axios";
import PostService from "./API/PostService.js";
import Loader from "./components/UI/loader/Loader.jsx";
import {useFetching} from "./hooks/useFetching.js";

function App() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        setPosts(await PostService.getAll());
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    useEffect(() => {
        void fetchPosts();
    }, []);

    const deletePost = (postId) => setPosts(posts.filter(post => post.id !== postId));

    return (
        <div className="App">
            <MyButton
                style={{marginTop: '30px'}}
                onClick={() => setModal(true)}
            >
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            {postError &&
                <h1 style={{textAlign: 'center'}}>
                    Произошла ошибка при загрузке данных: {postError}
                </h1>
            }
            {isPostsLoading
                ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader/>
                </div>
                : <PostList deletePost={deletePost}
                            title={'Список постов'}
                            posts={sortedAndSearchedPosts}/>
            }

        </div>
    )
}

export default App;

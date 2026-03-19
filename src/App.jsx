import React, {useEffect, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePagination, usePosts} from "./hooks/usePosts.js";
import PostService from "./API/PostService.js";
import Loader from "./components/UI/loader/Loader.jsx";
import {useFetching} from "./hooks/useFetching.js";
import {getPagesCount} from "./utils/pages.js";

function App() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [totalPages, setTotalPages] = useState(0);

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(1);

    let pagesArray = usePagination(totalPages);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = Number(response.headers['x-total-count']);
        setTotalPages(getPagesCount(totalCount, limit));
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
            <div className="page__wrapper">
                {
                    pagesArray.map(p => {
                        return (
                            <span
                                onClick={() => setPage(p)}
                                key={p}
                                className={page === p ? 'page page__current' : 'page'}
                            >
                                {p}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App;

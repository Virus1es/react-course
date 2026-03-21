import React, {useEffect, useRef, useState} from "react";
import '../styles/App.css';
import PostList from "../components/PostList.jsx";
import PostForm from "../components/PostForm.jsx";
import PostFilter from "../components/PostFilter.jsx";
import MyModal from "../components/UI/modal/MyModal.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import {usePosts} from "../hooks/usePosts.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/loader/Loader.jsx";
import {useFetching} from "../hooks/useFetching.js";
import {getPagesCount} from "../utils/pages.js";
import Paginator from "../components/UI/pagination/Paginator.jsx";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [totalPages, setTotalPages] = useState(0);

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(0);

    const lastElement = useRef(null);

    const observer = useRef(null);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = Number(response.headers['x-total-count']);
        setTotalPages(getPagesCount(totalCount, limit));
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    useEffect(() => {
        if(isPostsLoading) return;

        if(observer.current) observer.current.disconnect();

        const callback = function (entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
                setPage(page + 1);
            }
        }

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current);
    }, [isPostsLoading])

    useEffect(() => {
        void fetchPosts(limit, page);
    }, [page]);

    const deletePost = (postId) => setPosts(posts.filter(post => post.id !== postId));

    const changePage = (page) => setPage(page);

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
            <PostList deletePost={deletePost}
                      title={'Список постов'}
                      posts={sortedAndSearchedPosts}
            />
            <div ref={lastElement} style={{height: '20px'}}></div>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader/>
                </div>
            }
            {/*<Paginator*/}
            {/*    totalPages={totalPages}*/}
            {/*    page={page}*/}
            {/*    changePage={changePage}*/}
            {/*/>*/}
        </div>
    )
}

export default Posts;

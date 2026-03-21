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
import {useObserver} from "../hooks/useObserver.js";
import MySelect from "../components/UI/select/MySelect.jsx";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [totalPages, setTotalPages] = useState(0);

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(0);

    const lastElement = useRef(null);

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

    useObserver(
        lastElement,
        page < totalPages,
        isPostsLoading,
        () => setPage(page + 1)
    );

    useEffect(() => {
        void fetchPosts(limit, page);
    }, [page, limit]);

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
            <MySelect value={limit}
                      onChange={value => setLimit(value)}
                      defaultValue="Кол-во элементов на странице"
                      options={[
                          {value: 5,  name: '5'},
                          {value: 10, name: '10'},
                          {value: 25, name: '25'},
                          {value: -1, name: 'Все посты'},
                      ]}
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

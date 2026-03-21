import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/loader/Loader.jsx";
import Comments from "../components/Comments.jsx";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        void fetchPostById(params.id);
        void fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>Вы открыли страницу поста (ID: {params.id})</h1>
            {isLoading ?
                <Loader/> :
                <div>
                    {post.id}. {post.title}
                </div>
            }
            <section style={{marginTop: '15px'}}>
                <h2>Комментарии:</h2>
                <Comments isLoading={isComLoading}
                          comments={comments}
                />
            </section>
        </div>
    );
};

export default PostIdPage;
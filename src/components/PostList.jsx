import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({deletePost, title, posts}) => {
    if(!posts.length) {
        return (
            <h2 style={{textAlign: 'center'}}>
                Список постов пуст
            </h2>
        );
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem deletePost={deletePost} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
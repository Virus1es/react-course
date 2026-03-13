import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({title, posts}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
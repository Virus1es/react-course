import React from 'react';
import MyButton from "./UI/button/MyButton.jsx";

const PostItem = React.forwardRef((props, ref) => {
    const {
        post,
        deletePost
    } = props;

    return (
        // Передаём ref в корневой div
        <div className="post" ref={ref}>
            <div className="post_content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => deletePost(post.id)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
});

export default PostItem;
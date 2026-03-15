import React from 'react';
import MyButton from "./UI/button/MyButton.jsx";

// Оборачиваем компонент в forwardRef
const PostItem = React.forwardRef(({ deletePost, number, post }, ref) => {
    return (
        // Передаём ref в корневой div
        <div className="post" ref={ref}>
            <div className="post_content">
                <strong>{number}. {post.title}</strong>
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
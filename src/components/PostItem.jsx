import React from 'react';
import MyButton from "./UI/button/MyButton.jsx";
const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => props.deletePost(props.post.id)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
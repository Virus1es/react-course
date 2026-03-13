import React from 'react';
const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
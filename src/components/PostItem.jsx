import React from 'react';
const PostItem = () => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>1. JavaScript</strong>
                <div>
                    JavaScript - язык программирования
                </div>
            </div>
            <div className="post__buttons">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
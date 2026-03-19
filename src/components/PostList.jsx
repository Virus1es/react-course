import React, { useRef } from 'react';
import PostItem from "./PostItem.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ deletePost, title, posts }) => {
    const postsRefs = useRef(posts.map(() => React.createRef()));

    if (postsRefs.current.length !== posts.length) {
        postsRefs.current = posts.map(() => React.createRef());
    }

    if (!posts.length) {
        return (
            <h2 style={{ textAlign: 'center' }}>
                Список постов пуст
            </h2>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        nodeRef={postsRefs.current[index]}
                    >
                        <PostItem
                            ref={postsRefs.current[index]}
                            deletePost={deletePost}
                            post={post}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
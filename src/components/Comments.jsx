import React from 'react';
import Loader from "./UI/loader/Loader.jsx";

const Comments = ({isLoading, comments}) => {
    return (
        isLoading ? <Loader/> :
            <div>
                {comments.map(comment =>
                    <div key={comment.id}
                         style={{marginTop: '15px'}}>
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                    </div>
                )}
            </div>
    );
};

export default Comments;
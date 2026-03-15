import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MyButton from "./UI/button/MyButton.jsx";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now()
        };

        create(newPost);

        setPost({
            title: '',
            body: ''
        });
    };

    return (
        <form>
            <MyInput type="text"
                     placeholder="Название поста"
                     value={post.title}
                     onChange={event => setPost({...post, title: event.target.value})}
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type="text"
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
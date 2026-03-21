import React from 'react';
import MyInput from "../components/UI/input/MyInput.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";

const Login = () => {
    return (
        <div>
            <h1>Страница входа</h1>
            <form>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>
                    Войти
                </MyButton>
            </form>
        </div>
    );
};

export default Login;
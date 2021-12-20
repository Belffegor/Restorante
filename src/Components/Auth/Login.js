import React from "react";
import PropTypes from 'prop-types';

const login = (props) => {
    return(
        <div className = 'login-container'>
            <nav className = 'login'>
                <h2> Авторизация</h2>
                <p> Введите логин и пароль Вашего аккаунта GitHub</p>
                <button className ='github' onClick = {() =>props.authenticate() }>
                    Войти
                </button>
            </nav>

        </div>
    );
};

login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default login;
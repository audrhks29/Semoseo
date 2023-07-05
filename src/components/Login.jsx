import React, { memo } from 'react';

const Login = memo(() => {
    return (
        <div className='login_container'>
            <label htmlFor="">아이디</label>
            <input type="id" />
            <label htmlFor="">로그인</label>
            <input type="password" />
        </div>
    );
});

export default Login;
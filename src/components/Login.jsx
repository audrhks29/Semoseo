import React, { useState } from 'react';
import { useLogin } from '../contexts/LoginContext';

const Login = () => {
    const { login, authed } = useLogin()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
    return (
        <div className='login_container'>
            <h2>세상의 모든 서재</h2>
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="" >아이디</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="">비밀번호</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
};

export default Login;
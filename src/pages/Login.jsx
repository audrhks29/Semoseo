import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange, login } from '../store/modules/signSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const { userPwd } = useSelector(state => state.sign)
    const { userId } = useSelector(state => state.sign)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        if (!userPwd || !userId) return
        dispatch(login({ userId, userPwd }))
        navigate('/')
    }
    return (
        <div className="section">
            <div className='loginContainer'>
                <div className="inner">
                    <h2>세상의 모든 서재</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="" >아이디</label>
                            <input type="id" value={userId} onChange={(e) => dispatch(inputChange({ userId: e.target.value, userPwd }))} />
                        </div>
                        <div> <label htmlFor="">비밀번호</label>
                            <input type="password" value={userPwd} onChange={(e) => dispatch(inputChange({ userId, userPwd: e.target.value }))} /></div>
                        <div className="btnWrap">
                            <button type='submit'>로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
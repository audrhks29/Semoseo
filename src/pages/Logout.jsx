import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { inputChange } from '../store/modules/signSlice';

export const Logout = () => {
    const navigate = useNavigate()
    const { userPwd } = useSelector(state => state.sign)
    const { userId } = useSelector(state => state.sign)
    const dispatch = useDispatch()
    return (
        <div className='logoutContainer'>
            <h1>로그인 되었습니다.</h1>
            <h3>아이디 : {userId} </h3>
            <button onClick={() => dispatch(inputChange({ userId: "", userPwd: "" }), navigate('/'))}>로그아웃</button>
        </div>
    );
};
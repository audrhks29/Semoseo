import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange, login } from '../store/modules/signSlice';
import { useNavigate } from 'react-router-dom';
import { SectionContainer } from '../styled/MainStyle';
import { BtnWrap, CommonFormContainer } from '../styled/CommonStyle';
const Login = () => {
    const navigate = useNavigate()
    const { userId, userPwd } = useSelector(state => state.sign.users)
    console.log(userId);
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        if (!userPwd || !userId) return
        dispatch(login({ userId, userPwd, loginStatus: true }))
        navigate('/')
    }
    return (
        <SectionContainer>
            <CommonFormContainer>
                <div className="inner">
                    <h2>세상의 모든 서재</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="" >아이디</label>
                            <input type="id" value={userId} onChange={(e) => dispatch(inputChange({ userId: e.target.value, userPwd }))} />
                        </div>
                        <div> <label htmlFor="">비밀번호</label>
                            <input type="password" value={userPwd} onChange={(e) => dispatch(inputChange({ userId, userPwd: e.target.value }))} /></div>
                        <BtnWrap>
                            <button type='submit'>로그인</button>
                        </BtnWrap>
                    </form>
                </div>
            </CommonFormContainer>
        </SectionContainer>
    );
};

export default Login;
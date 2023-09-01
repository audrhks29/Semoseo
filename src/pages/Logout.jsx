import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/modules/signSlice';
import { SectionContainer } from '../styled/MainStyle';
import { LogoutBtnWrap, LogoutContainer } from '../styled/SignStyle';

export const Logout = () => {
    const navigate = useNavigate()
    const { userId } = useSelector(state => state.sign.users)
    const dispatch = useDispatch()
    return (
        <SectionContainer>
            <LogoutContainer>
                <div className="inner">
                    <h2>로그아웃</h2>
                    <div className='logoutWrap'>
                        <h3>아이디 : {userId} </h3>
                        <LogoutBtnWrap>
                            <button onClick={() => dispatch(logout({ userId: "", userPwd: "", loginStatus: false }), navigate('/'))}>로그아웃</button>
                        </LogoutBtnWrap>
                    </div>
                </div>
            </LogoutContainer>
        </SectionContainer>
    );
};
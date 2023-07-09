import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/modules/signSlice';

export const Logout = () => {
    const navigate = useNavigate()
    const { userId } = useSelector(state => state.sign.users)
    const dispatch = useDispatch()
    return (
        <div className="section">
            <div className='logoutContainer'>
                <div className="inner">
                    <h2>로그아웃</h2>
                    <div className='logoutWarp'>
                        <h3>아이디 : {userId} </h3>
                        <div className='btnWrap'>
                            <button onClick={() => dispatch(logout({ userId: "", userPwd: "", loginStatus: false }), navigate('/'))}>로그아웃</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
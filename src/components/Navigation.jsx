import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
const Navigation = () => {
    const { userId } = useSelector(state => state.sign.users)
    const location = useLocation();
    const [isListNum, setIsListNum] = useState(1)

    const { loginStatus } = useSelector(state => state.sign)
    return (
        <ul className='nav'>
            <div className='inner'>
                <Link to={'/'}><li className={location.pathname === ('/' || '/edit') ? 'on' : ""}>홈</li></Link>
                <Link to={'/add'}><li className={location.pathname === '/add' ? 'on' : ""}>추가</li></Link>
                {//userId와 userPwd가 있으면 로그아웃 표시, 없으면 로그인 표시
                    loginStatus
                        ? <Link to={'/logout'}><li className={location.pathname === '/logout' ? 'on' : ""}>로그아웃</li></Link>
                        : <Link to={'/login'}><li className={location.pathname === '/login' ? 'on' : ""}>로그인</li></Link>
                }
                {
                    loginStatus ? <span><em>{userId}</em>님 환영합니다</span> : ''
                }
            </div>
        </ul >
    );
};

export default Navigation;
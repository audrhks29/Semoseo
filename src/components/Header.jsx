import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../contexts/LoginContext';

const Header = () => {
    const { authed } = useLogin()
    return (
        <div id="header">
            <h2>세상의 모든 서재</h2>
            <ul className='nav'>
                <Link to={'/'}><li>홈</li></Link>
                <Link to={'/add'}><li>추가</li></Link>
                {
                    authed
                        ? <li><Link to={'/logout'}>로그아웃</Link></li>
                        : <li><Link to={'/login'}>로그인</Link></li>
                }
            </ul>
        </div>
    );
};

export default Header;
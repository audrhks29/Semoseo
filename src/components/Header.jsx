import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = memo(() => {
    return (
        <div id="header">
            <h2>세상의 모든 서재</h2>
            <ul className='nav'>
                <Link to={'/'}><li>홈</li></Link>
                <Link to={'/add'}><li>추가</li></Link>
                <Link to={'/login'}><li>로그인</li></Link>
            </ul>
        </div>
    );
});

export default Header;
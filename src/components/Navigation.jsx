import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navigation = memo(() => {
    const { userId, userPwd } = useSelector(state => state.sign)
    const [isListNum, setIsListNum] = useState(1)
    const onListClass = (isListNum) => {
        setIsListNum(isListNum)
    }
    return (
        <ul className='nav'>
            <div className='inner'>
                <Link to={'/'}><li onClick={() => onListClass(1)} className={isListNum === 1 ? 'on' : ""}>홈</li></Link>
                <Link to={'/add'}><li onClick={() => onListClass(2)} className={isListNum === 2 ? 'on' : ""}>추가</li></Link>
                {//userId와 userPwd가 있으면 로그아웃 표시, 없으면 로그인 표시
                    userId && userPwd
                        ? <Link to={'/logout'}><li onClick={() => onListClass(3)} className={isListNum === 3 ? 'on' : ""}>로그아웃
                            <span>{userId}님 환영합니다</span></li></Link>
                        : <Link to={'/login'}><li onClick={() => onListClass(3)} className={isListNum === 3 ? 'on' : ""}>로그인</li></Link>
                }
            </div>
        </ul>
    );
});

export default Navigation;
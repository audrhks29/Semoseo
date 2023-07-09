import React, { memo } from 'react';
import BookList from '../components/BookList';
import { useSelector } from 'react-redux';

const Main = () => {

    return (
        <div div className='section' >
            <div className="inner">
                <h2>도서 목록</h2>
                <BookList />
            </div>
        </div >
    );
};

export default memo(Main);
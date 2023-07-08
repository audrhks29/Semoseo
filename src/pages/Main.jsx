import React, { memo } from 'react';
import BookList from '../components/BookList';

const Main = () => {

    return (
        <div className='section'>
            <div className="inner">
                <h2>도서 목록</h2>
                <BookList />
            </div>
        </div >
    );
};

export default memo(Main);
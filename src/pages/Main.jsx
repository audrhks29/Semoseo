import React, { memo } from 'react';
import BookList from '../components/BookList';
import SearchBook from './SearchBook';

const Main = () => {
    return (
        <div div className='section' >
            <div className="inner">
                <h2>도서 목록</h2>
                <SearchBook />
                <BookList />
            </div>
        </div >
    );
};

export default memo(Main);
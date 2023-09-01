import React from 'react';
import BookList from '../components/BookList';
import SearchBook from './SearchBook';
import { SectionContainer } from '../styled/MainStyle';

const Main = () => {
    return (
        <SectionContainer>
            <div className="inner">
                <h2>도서 목록</h2>
                <SearchBook />
                <BookList />
            </div>
        </SectionContainer >
    );
};

export default Main;
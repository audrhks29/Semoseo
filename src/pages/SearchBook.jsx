import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchData } from '../store/modules/bookSlice';
import { SearchContainer } from '../styled/SearchStyle';

const SearchBook = () => {
    const [searchData, setSearchData] = useState('');
    const dispatch = useDispatch()
    const onSubmitKeyword = (e) => {
        setSearchData(e.target.value)
    }
    const onClickSubmit = (e) => {
        e.preventDefault()
        dispatch(onSearchData(searchData))
    }
    return (
        <SearchContainer>
            <form onSubmit={e => onClickSubmit(e)}>
                <input
                    type="text"
                    value={searchData}
                    onChange={e => onSubmitKeyword(e)}
                    placeholder='책 제목을 입력해주세요'
                />
                <button type="submit">검색</button>
            </form>
        </SearchContainer>
    );
};

export default SearchBook;
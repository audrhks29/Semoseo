import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchData } from '../store/modules/bookSlice';

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
        <div>
            <form onSubmit={e => onClickSubmit(e)}>
                <input
                    type="text"
                    value={searchData}
                    onChange={e => onSubmitKeyword(e)}
                />
                <button type="submit">검색</button>
            </form>
        </div>
    );
};

export default SearchBook;
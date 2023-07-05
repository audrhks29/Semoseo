import React, { memo } from 'react';
import { useBook } from '../contexts/BookContext';

const Add = memo(() => {
    const { onAdd, inputChange, inputValue } = useBook()
    const { code, genre, title, author } = inputValue

    return (
        <div>
            <form onSubmit={onAdd}>
                <label htmlFor="">코드</label>
                <input type="text" value={code} onChange={inputChange} name="code" id="code" placeholder='코드' />
                <label htmlFor="">장르</label>
                <input type="text" value={genre} onChange={inputChange} name="genre" id="genre" placeholder='장르' />
                <label htmlFor="">제목</label>
                <input type="text" value={title} onChange={inputChange} name="title" id="title" placeholder='제목' />
                <label htmlFor="">저자</label>
                <input type="text" value={author} onChange={inputChange} name="author" id="author" placeholder='저자' />
                <button type="submit">추가</button>
            </form>
        </div>
    );
});

export default Add;
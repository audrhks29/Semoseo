import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useBook } from '../contexts/BookContext';

const Edit = () => {
    const navigate = useNavigate()
    const { data, onEdit } = useBook()
    const { editID } = useParams()
    const [current, setCurrent] = useState({ id: '', code: '', genre: '', title: '', author: '' })
    const { code, genre, title, author } = current
    const changeInput = (e) => {
        const { name, value } = e.target
        setCurrent({
            ...current,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!code || !genre || !title || !author) return
        onEdit(current)
        navigate('/')
    }
    useEffect(() => {
        setCurrent(data.find(item => item.id === Number(editID)))
        console.log(data);
    }, [])
    return (
        <div>
            <h2>등록된 책의 정보 수정합니다. {editID}번</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="">코드 : </label>
                <input type="text" value={code} name="code" onChange={changeInput} />
                <label htmlFor="">장르 : </label>
                <input type="text" value={genre} name="genre" onChange={changeInput} />
                <label htmlFor="">제목 : </label>
                <input type="text" value={title} name="title" onChange={changeInput} />
                <label htmlFor="">저자 : </label>
                <input type="text" value={author} name="author" onChange={changeInput} />
                <button type='submit'>확인</button>
                <b><Link to={'/'}>취소</Link></b>
            </form>
        </div>
    );
};

export default Edit;
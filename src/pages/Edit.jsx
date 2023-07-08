import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { onEdit } from '../store/modules/bookSlice';

const Edit = () => {
    const { bookData } = useSelector(state => state.book);
    const navigate = useNavigate()
    // const { data, onEdit } = useBook()
    const { editID } = useParams()
    const dispatch = useDispatch()
    const [current, setCurrent] = useState({ id: '', code: '', genre: '', title: '', author: '' })
    const { code, genre, title, author } = current
    useEffect(() => {
        setCurrent(bookData.find(item => item.id === Number(editID)))
    }, [])
    const changeInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setCurrent({
            ...current,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!code || !genre || !title || !author) return
        dispatch(onEdit(current))
        navigate('/')
    }
    return (
        <div className="section">
            <div className='editBook'>
                <div className="inner">
                    <h2>정보 수정</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="">코드</label>
                            <input type="text" value={code} name="code" onChange={changeInput} />
                        </div>
                        <div>
                            <label htmlFor="">장르</label>
                            <input type="text" value={genre} name="genre" onChange={changeInput} />
                        </div>
                        <div>
                            <label htmlFor="">제목</label>
                            <input type="text" value={title} name="title" onChange={changeInput} />
                        </div>
                        <div>
                            <label htmlFor="">저자</label>
                            <input type="text" value={author} name="author" onChange={changeInput} />
                        </div>
                        <div className='btnWrap'>
                            <button type='submit'>확인</button>
                            <Link to={'/'}><button>취소</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
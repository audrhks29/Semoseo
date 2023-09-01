import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAdd } from '../store/modules/bookSlice';
import { Link, useNavigate } from 'react-router-dom';
import { SectionContainer } from '../styled/MainStyle';
import { BtnWrap, CommonFormContainer } from '../styled/CommonStyle';

const Add = memo(() => {
    const navigate = useNavigate()
    const [code, setCode] = useState('');
    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        if (!code || !genre || !title || !author) {
            return alert('값을 입력해주세요')
        }
        dispatch(onAdd({ code, genre, title, author }))
        navigate('/')
    }
    return (
        <SectionContainer>
            <CommonFormContainer>
                <div className="inner">
                    <h2>도서 추가</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="">코드</label>
                            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder='코드' />
                        </div>
                        <div>
                            <label htmlFor="">장르</label>
                            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder='장르' />
                        </div>
                        <div>
                            <label htmlFor="">제목</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='제목' />
                        </div>
                        <div>
                            <label htmlFor="">저자</label>
                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='저자' />
                        </div>
                        <BtnWrap>
                            <button type="submit">추가</button>
                            <Link to={'/'}><button>취소</button></Link>
                        </BtnWrap>
                    </form>
                </div>
            </CommonFormContainer>
        </SectionContainer>
    );
});

export default Add;
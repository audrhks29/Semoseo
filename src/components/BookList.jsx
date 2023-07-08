import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDel } from '../store/modules/bookSlice';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const BookList = memo(() => {
    const { bookData } = useSelector(state => state.book);
    const dispatch = useDispatch()
    return (
        <table className='bookList' style={{ textAlign: "center" }}>
            <colgroup>
                <col width={200} />
                <col width={200} />
                <col />
                <col width={300} />
                <col width={100} />
            </colgroup>
            <tbody>
                <tr>
                    <th>코드</th>
                    <th>장르</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th>관리</th>
                </tr>
                {
                    bookData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.code}</td>
                            <td>{item.genre}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>
                                <Link to={`/edit/${item.id}`}><button><AiFillEdit /></button></Link>
                                <button onClick={() => dispatch(onDel(item.id))}><AiFillDelete /></button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
});

export default BookList;
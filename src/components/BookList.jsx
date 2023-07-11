import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookData, onDel } from '../store/modules/bookSlice';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Pagination from './Pagination';

const BookList = () => {
    const { bookData, loading } = useSelector(state => state.book);
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    useEffect(() => {
        if (loading && localStorage.getItem('bookData') == null) dispatch(getBookData())
        else {
            JSON.parse(localStorage.getItem('bookData'));
        }
    }, []);
    const getPaginationSliceData = (PaginationSliceData) => {
        setData(PaginationSliceData)
    }
    return (
        <>
            <table className='bookList' style={{ textAlign: "center" }}>
                <colgroup>
                    <col width={200} />
                    <col width={150} />
                    <col />
                    <col width={200} />
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
                        data && data.map((item, index) => (
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
            <Pagination bookData={bookData} getPaginationSliceData={getPaginationSliceData} />
        </>
    );
};

export default BookList;
import React, { memo } from 'react';
import { useBook } from '../contexts/BookContext';

const Main = memo(() => {
    const { data, onDel } = useBook()
    return (
        <div className='section'>
            <table className='bookList' style={{ textAlign: "center" }}>
                <colgroup>
                    <col width={200} />
                    <col width={200} />
                    <col width={200} />
                    <col width={200} />
                    <col width={200} />
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
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.code}</td>
                                <td>{item.genre}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <button>관리</button>
                                    <button onClick={() => onDel(item.id)}>삭제</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
});

export default Main;
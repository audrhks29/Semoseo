import React, { useEffect, useState } from 'react';
import { TfiAngleDoubleLeft, TfiAngleDoubleRight, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
const Pagination = ({ bookData, getPaginationSliceData }) => {
    const bookPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)
    const lastPage = Math.ceil(bookData.length / bookPerPage)
    const totalPage = Array.from({ length: lastPage }, (_, index) => index + 1);
    const goToSelectedPage = (currentPage) => {
        if (currentPage >= 1 && currentPage <= lastPage) setCurrentPage(currentPage)
    }
    const SlicedBookData = bookData.slice((currentPage - 1) * bookPerPage, currentPage * bookPerPage);
    useEffect(() => {
        getPaginationSliceData(SlicedBookData)
    }, [currentPage, bookData])
    return (
        <div className='pagination'>
            <p onClick={() => goToSelectedPage(1)}><TfiAngleDoubleLeft /></p>
            <p onClick={() => goToSelectedPage(currentPage - 1)}><TfiAngleLeft /></p>
            {
                totalPage.map((item, index) => {
                    return (
                        <p className={currentPage - 1 === index ? "pagingOn" : ""} key={index} onClick={() => goToSelectedPage(item)}> {item}</p>
                    )
                })
            }
            <p onClick={() => goToSelectedPage(currentPage + 1)}><TfiAngleRight /></p>
            <p onClick={() => goToSelectedPage(lastPage)}><TfiAngleDoubleRight /></p>
        </div >

    );
};

export default Pagination;
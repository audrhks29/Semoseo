import React, { useEffect, useState } from 'react';
import { TfiAngleDoubleLeft, TfiAngleDoubleRight, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { onSearchedData } from '../store/modules/bookSlice';
import { PaginationContainer } from '../styled/PaginationStyle';
const Pagination = () => {
    const { bookData, searchKeyword, searchedData } = useSelector(state => state.book);
    const bookPerPage = 5
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState()
    // const lastPage = Math.ceil(bookData.length / bookPerPage);
    useEffect(() => {
        let lastPageSetting = 0
        lastPageSetting = searchKeyword
            ? Math.ceil(searchedData.length / bookPerPage)
            : Math.ceil(bookData.length / bookPerPage);
        setLastPage(lastPageSetting)
    }, [bookData, searchedData, searchKeyword])
    const totalPage = Array.from({ length: lastPage }, (_, index) => index + 1);
    const goToSelectedPage = (currentPage) => {
        if (currentPage >= 1 && currentPage <= lastPage) setCurrentPage(currentPage)
    }
    // const SlicedBookData = bookData.slice((currentPage - 1) * bookPerPage, currentPage * bookPerPage);
    const onSlicedBookData = () => {
        let sliceData = []
        if (searchKeyword === "") {
            sliceData = bookData.slice((currentPage - 1) * bookPerPage, currentPage * bookPerPage);
        } else {
            const filterData = bookData.filter((item) => item.title.includes(searchKeyword));
            sliceData = filterData.slice((currentPage - 1) * bookPerPage, currentPage * bookPerPage);
        }
        dispatch(onSearchedData(sliceData))
    }
    useEffect(() => {
        onSlicedBookData()
    }, [currentPage, bookData, searchKeyword])
    return (
        <PaginationContainer>
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
        </PaginationContainer >

    );
};

export default Pagination;
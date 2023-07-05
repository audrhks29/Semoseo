import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const initialState = [
    { id: 1, code: "007", genre: "스릴러", title: "흥부와 놀부", author: "김흥국" }
]

const BookContext = createContext()
export const useBook = () => useContext(BookContext)
export const BookProvider = ({ children }) => {
    const navigate = useNavigate()
    const [data, setData] = useState(initialState)
    const noRef = useRef(data.length + 1)
    const [inputValue, setInputValue] = useState({ id: "", code: "", genre: "", title: "", author: "" })
    const onAdd = (e) => {
        e.preventDefault()
        if (!inputValue.code || !inputValue.genre || !inputValue.title || !inputValue.author) return
        inputValue.id = noRef.current++
        console.log(noRef);
        setData([...data, inputValue])
        setInputValue({ id: "", code: '', genre: '', title: '', author: '' })
        navigate('/')
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const onEdit = (current) => {
        setData(data.map(item => item.id === current.id ? current : item))
    }
    const inputChange = (e) => {
        const { value, name } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const value = useMemo(() => (
        { data, initialState, onAdd, inputChange, onDel, onEdit, inputValue }
    ), [data, initialState, onAdd, inputChange, onDel, onEdit, inputValue])
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};


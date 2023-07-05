import React, { createContext, useContext, useMemo, useRef, useState } from 'react';
const initialState = [
    { id: 1, code: "007", genre: "스릴러", title: "흥부와 놀부", author: "김흥국" }
]

const BookContext = createContext()
export const useBook = () => useContext(BookContext)
export const BookProvider = ({ children }) => {
    const noRef = useRef(1)
    const [data, setData] = useState(initialState)
    const onAdd = (e) => {
        if (!inputValue.code || !inputValue.genre || !inputValue.title || !inputValue.author) return
        inputValue.id = noRef.current++
        setData([...data, inputValue])
        setInputValue({ code: '', genre: '', title: '', author: '' })
        e.preventDefault()
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const [inputValue, setInputValue] = useState({ id: "", code: "", genre: "", title: "", author: "" })
    const inputChange = (e) => {
        const { value, name } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const value = useMemo(() => (
        { data, initialState, onAdd, inputChange, onDel, inputValue }
    ), [data, initialState, onAdd, inputChange, onDel, inputValue])
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};


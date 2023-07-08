import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: "",
    bookData: [
        { id: 1, code: "007", genre: "스릴러", title: "흥부와 놀부", author: "김흥국" }
    ]
}
let no = 2
export const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        onAdd(state, action) {
            const { code, genre, title, author } = action.payload
            state.bookData.push({
                id: no++, code, genre, title, author,
            })
        },
        onDel(state, action) {
            state.bookData = state.bookData.filter(item => item.id !== action.payload)
        },
        onEdit(state, action) {
            const { id, code, genre, title, author } = action.payload;
            const index = state.bookData.findIndex(item => item.id === id);
            state.bookData[index] = { id, code, genre, title, author, };
        },
    }
})

export const { onAdd, onDel, onEdit, inputChange, bookData } = bookSlice.actions
export default bookSlice.reducer
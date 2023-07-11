import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    text: "",
    bookData: localStorage.getItem('bookData')
        ? JSON.parse(localStorage.getItem('bookData'))
        : [],
    loading: true,
    state: null
}
export const getBookData = createAsyncThunk(
    'book/getBookData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/8820832dceac9aaab644ee7d8880e4db/raw/2919e690f730629168d69431c56c272c1de04ee7/bookData.json')
        return res.data
    }
)
// let no = 26
export const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        onAdd(state, action) {
            const { code, genre, title, author } = action.payload
            const newBook = {
                id: state.bookData.length + 1,
                code,
                genre,
                title,
                author,
            };
            state.bookData.push(newBook);
            localStorage.setItem('bookData', JSON.stringify(state.bookData))
        },
        onDel(state, action) {
            state.bookData = state.bookData.filter(item => item.id !== action.payload)
            localStorage.setItem('bookData', JSON.stringify(state.bookData))
        },
        onEdit(state, action) {
            const { id, code, genre, title, author } = action.payload;
            const index = state.bookData.findIndex(item => item.id === id);
            state.bookData[index] = { id, code, genre, title, author, };
            localStorage.setItem('bookData', JSON.stringify(state.bookData))
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBookData.pending, (state, action) => {
                state.state = '로딩'
                state.loading = true
            })
            .addCase(getBookData.fulfilled, (state, action) => {
                state.state = "성공"
                state.loading = false
                state.bookData = action.payload
            })
            .addCase(getBookData.rejected, (state, action) => {
                state.state = "rejected"
                state.loading = true
            })
    }
})

export const { onAdd, onDel, onEdit } = bookSlice.actions
export default bookSlice.reducer
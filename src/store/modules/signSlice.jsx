import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 1, userId: "", userPwd: ""
}
export const signSlice = createSlice({
    name: 'sign',
    initialState: initialState,
    reducers: {
        login(state, action) {
            if (action.payload.userId === "user" && action.payload.userPwd === '1234') {
                alert("로그인 성공")
            } else alert("아이디와 비밀번호를 다시 확인해주세요")
        },
        inputChange(state, action) {
            state.userId = action.payload.userId;
            state.userPwd = action.payload.userPwd;
        },
        logout(state, action) { },

    }
})

export const { login, inputChange } = signSlice.actions
export default signSlice.reducer
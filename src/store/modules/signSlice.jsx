import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: { id: 1, userId: "", userPwd: "" },
    loginStatus: false,
}
// const initialState = {
//     id: 1, userId: "", userPwd: ""
// }
export const signSlice = createSlice({
    name: 'sign',
    initialState: initialState,
    reducers: {
        login(state, action) {
            // console.log(state.users.userId);
            console.log(action.payload.userId);
            if (action.payload.userId === "user" && action.payload.userPwd === '1234') {
                alert("로그인 성공")
                state.loginStatus = action.payload.loginStatus;
            } else alert("아이디와 비밀번호를 다시 확인해주세요")
        },
        inputChange(state, action) {
            state.users.userId = action.payload.userId;
            state.users.userPwd = action.payload.userPwd;
        },
        logout(state, action) {
            const logoutConfirm = confirm("로그아웃을 진행하시겠습니까?");
            if (logoutConfirm) {
                alert("로그아웃 성공")
                state.users.userId = action.payload.userId;
                state.users.userPwd = action.payload.userPwd;
                state.loginStatus = action.payload.loginStatus;
            } else {
                alert("취소하였습니다");
            }
        },
    }
})

export const { login, inputChange, logout } = signSlice.actions
export default signSlice.reducer
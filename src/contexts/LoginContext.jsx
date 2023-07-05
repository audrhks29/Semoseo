import React, { createContext, memo, useContext } from 'react';

const initialState = {}
const LoginContext = createContext()
export const useLogin = useContext(LoginContext)
export const LoginProvider = memo(({ children }) => {
    const userId = "myungkwan123"
    const userPassword = "1234"

    return (
        <LoginContext.Provider value="">
            {children}
        </LoginContext.Provider>
    );
});

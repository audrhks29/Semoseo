import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const initialState = {}
const LoginContext = createContext()
export const useLogin = () => useContext(LoginContext)
export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        JSON.parse(localStorage.getItem('user')) || null
    })
    const navigate = useNavigate()
    const login = (email, password) => {
        const logUser = { id: '000001', email }
        localStorage.setItem('user', JSON.stringify(logUser))
        if (password === '1234') {
            setUser(logUser)
            navigate('/')
        }
    }
    const logout = () => {
        console.log('logout');
        localStorage.removeItem('user')
        setUser(null)
        navigate('/')
    }
    const value = useMemo(() => ({
        user, login, logout, authed: !!user
    }), [user, login, logout])
    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
};

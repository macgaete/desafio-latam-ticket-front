// Placeholder

import React, { createContext, useContext, useReducer } from 'react';
// import BackendAPI from '../constants/BackendApiConfig.json'

const DataContext = createContext({ user: {userObj: {}, isLoggedIn: false} });

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': // Login
            return { ...state, userObj: action.payload, isLoggedIn: true };
        case 'UNSET_USER': // Log Out
            return { ...state, userObj: action.payload, isLoggedIn: false }
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {userObj: {}, isLoggedIn: false});

    const userCtxLogin = (user) => {
        dispatch({ type: 'SET_USER', payload: user });
    }

    const userCtxLogout = (user) => {
        dispatch({ type: 'UNSET_USER', payload: user })
    }

    return (
        <UserContext.Provider value={{ user, userCtxLogin, userCtxLogout}}>
            { children }
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(DataContext);
};
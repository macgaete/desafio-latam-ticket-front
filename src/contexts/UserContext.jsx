import React, { createContext, useContext, useReducer, useEffect } from 'react';
// import BackendAPI from '../constants/BackendApiConfig.json'

const UserContext = createContext({ user: {} });

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': // Login
            return { ...state, user: action.payload };
        case 'UNSET_USER': // Log Out
            return { ...state, user: {}}
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {});

    const userCtxLogin = (userObject) => {
        dispatch({ type: 'SET_USER', payload: userObject });
    }

    const userCtxLogout = () => {
        dispatch({ type: 'UNSET_USER' })
    }

    console.log("userCtxLogin function:", userCtxLogin);
    console.log("userCtxLogout function:", userCtxLogout);

    return (
        <UserContext.Provider value={{ user: state.user}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};

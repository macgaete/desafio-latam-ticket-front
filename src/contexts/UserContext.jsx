import React, { createContext, useContext, useReducer } from 'react';
// import BackendAPI from '../constants/BackendApiConfig.json'

const UserContext = createContext({ user: {userObj: {}, isLoggedIn: false, isOrganizer: false} });

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': // Login
            return { ...state, userObj: action.payload, isLoggedIn: true };
        case 'UNSET_USER': // Log Out
            return { ...state, userObj: action.payload, isLoggedIn: false };
        case 'SET_ORGANIZER':
            if(state.isLoggedIn && !state.isOrganizer){
                return { ...state, userObj: action.payload, isOrganizer: true,  isLoggedIn: true }
            } else {
                return state
            }
        case 'SET_GUEST':
            if(state.isLoggedIn && state.isOrganizer){
                return { ...state, userObj: action.payload, isOrganizer: false,  isLoggedIn: true }
            } else {
                return state
            }
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {userObj: {}, isLoggedIn: false, isOrganizer: false});

    const userCtxLogin = (user) => {
        dispatch({ type: 'SET_USER', payload: user });
    }

    const userCtxLogout = (user) => {
        dispatch({ type: 'UNSET_USER', payload: user });
    }

    const userCtxSetOrganizer = (user) => {
        dispatch({ type: 'SET_ORGANIZER', payload: user });
    }

    const userCtxSetGuest = (user) => {
        dispatch({ type: 'SET_GUEST', payload: user });
    }

    return (
        <UserContext.Provider value={{ user, userCtxLogin, userCtxLogout, userCtxSetOrganizer, userCtxSetGuest}}>
            { children }
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
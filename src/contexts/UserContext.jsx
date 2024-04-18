import React, { createContext, useContext, useReducer, useEffect } from 'react';

const UserContext = createContext({ user: {isLoggedIn:false, username:null}, loading: true });

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload, loading: false };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { user: {}, loading: true });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                dispatch({ type: 'SET_LOADING', payload: true });
                const response = await fetch('https://example.com/api/user');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await response.json();
                dispatch({ type: 'SET_USER', payload: userData });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user: state.user, loading: state.loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};

// Placeholder

import React, { createContext, useContext, useReducer } from 'react';
// import BackendAPI from '../constants/BackendApiConfig.json'

const DataContext = createContext({ data: {dataObj: {}} });

const dataReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const DataProvider = ({ children }) => {
    const [data, dispatch] = useReducer(dataReducer, {dataObj: {}});

    return (
        <DataContext.Provider value={{ data }}>
            { children }
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
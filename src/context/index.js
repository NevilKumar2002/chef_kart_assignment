import { createContext, useContext } from 'react';

const APIContext = createContext();
const REACT_APP_BACKEND_URI = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io';

export const useAPI = () => {
    return useContext(APIContext);
};

const getDishes = async () => {
    return fetch(REACT_APP_BACKEND_URI + '/dishes/v1/')
        .then(res => res.json())
        .then(res => res.dishes);
};

const getPopularDishes = async () => {
    return fetch(REACT_APP_BACKEND_URI + '/dishes/v1/')
        .then(res => res.json())
        .then(res => res.popularDishes);
};

const getDishDetails = async (dishId) => {
    return fetch(REACT_APP_BACKEND_URI + '/dishes/v1/' + dishId)
        .then(res => res.json());
};

export const APIProvider = ({ children }) => {
    const api = {
        getDishes,
        getPopularDishes,
        getDishDetails
    };

    return (
        <APIContext.Provider value={api}>
            {children}
        </APIContext.Provider>
    );
};

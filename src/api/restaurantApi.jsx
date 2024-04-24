import { instance } from './axios';

export const getRestaurantList = async () => {
    try {
        const response = await instance.get('/restaurant');
        return response;
    } catch (err) {
        console.error(err);
    }
};

export const getRestaurant = async (id) => {
    try {
        const response = await instance.get(`/restaurant/${id}`);
        return response;
    } catch (err) {
        console.error(err);
    }
};

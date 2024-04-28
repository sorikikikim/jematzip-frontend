import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getRestaurant, getRestaurantList } from '../api/restaurantApi';
import { useEffect } from 'react';

export const useRestaurantListQuery = () => {
    const navigate = useNavigate();
    const {
        data: restaurantList,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['restaurantList'],
        queryFn: getRestaurantList,
        cachetime: 30 * 60 * 1000,
    });

    useEffect(() => {
        if (isError) {
            navigate('/error');
        }
    }, [isError, navigate]);

    return { restaurantList, isLoading };
};

export const useRestaurantItemQuery = (id) => {
    const navigate = useNavigate();
    const {
        data: restaurantItem,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['restaurant', id],
        queryFn: () => getRestaurant(id),
        cachetime: 30 * 60 * 1000,
    });

    useEffect(() => {
        if (isError) {
            navigate('/error');
        }
    }, [isError, navigate]);

    return { restaurantItem, isLoading };
};

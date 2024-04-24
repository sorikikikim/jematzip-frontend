import { useEffect, useState } from 'react';
import { getRestaurantList } from '../api/restaurantApi';
import CardList from '../components/CardList';

export default function ListPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRestaurantList();
            setList(response.data);
        };
        fetchData();
    }, []);

    return (
        list && (
            <div className="main">
                <CardList list={list} />
            </div>
        )
    );
}

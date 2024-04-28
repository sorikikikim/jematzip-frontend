import { useQuery } from '@tanstack/react-query';
import { getRestaurantList } from '../api/restaurantApi';
import CardList from '../components/CardList';
import { useNavigate } from 'react-router-dom';

export default function ListPage() {
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

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        navigate('/error');
        return null;
    }

    return (
        <main className="main">
            <CardList list={restaurantList} />
        </main>
    );
}

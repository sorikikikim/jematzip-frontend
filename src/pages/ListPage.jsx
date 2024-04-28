import CardList from '../components/CardList';
import { useRestaurantListQuery } from '../hooks/useRestaurantQuery';

export default function ListPage() {
    const { restaurantList, isLoading } = useRestaurantListQuery();

    return (
        <main className="main">
            {isLoading && <div>Loading...</div>}
            {restaurantList && !isLoading && <CardList list={restaurantList} />}
        </main>
    );
}

import { useQuery } from '@tanstack/react-query';
import { getRestaurantList } from '../api/restaurantApi';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
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
    //useEffect -> clean up //abort controller // react-query
    // useReducer, useRef

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        navigate('/error');
        return null;
    }

    const thumbnails = restaurantList.map((item) => item.thumbnail);

    return (
        <main className="main">
            <section className="">
                <Carousel images={thumbnails} />
                <SearchBar />
            </section>
        </main>
    );
}

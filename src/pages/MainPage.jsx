import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import { useRestaurantListQuery } from '../hooks/useRestaurantQuery';

export default function MainPage() {
    //useEffect -> clean up //abort controller // react-query
    // useReducer, useRef
    const { restaurantList, isLoading } = useRestaurantListQuery();

    const thumbnails =
        restaurantList && restaurantList.map((item) => item.thumbnail);

    return (
        <main className="main">
            {isLoading && <div>Loading...</div>}
            {thumbnails && !isLoading && (
                <section className="">
                    <Carousel images={thumbnails} />
                    <SearchBar />
                </section>
            )}
        </main>
    );
}

import { useEffect, useState } from 'react';
import KakaoMap from '../components/Map';
import { getRestaurant } from '../api/restaurantApi';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRestaurant(id);
            setItem(response.data);
        };
        fetchData();
    }, [id]);

    return (
        item && (
            <div className="main">
                <KakaoMap location={item.location} />
            </div>
        )
    );
}

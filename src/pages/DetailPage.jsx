import { useEffect, useState } from 'react';
import KakaoMap from '../components/Map';
import { getRestaurant } from '../api/restaurantApi';
import { Link, useParams } from 'react-router-dom';

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
            <main className="main">
                <section className="detail">
                    <article className="detail-content">
                        <img
                            src={
                                item.thumbnail
                                    ? item.thumbnail
                                    : 'image/img-notFound.webp'
                            }
                            alt={`${item.name}의 이미지`}
                            className="detail-image"
                        />
                        <div className="detail-info">
                            <h2 className="detail-name">{item.name}</h2>
                            <p className="detail-address">
                                도로명 주소: {item.location.roadAddress}
                            </p>
                            <p className="detail-address">
                                지번 주소: {item.location.parcelAddress}
                            </p>
                            <p>영업시간: {item.openingHours}</p>
                            <p>{item.category}</p>
                            <p>전화번호: {item.contact}</p>
                            {item.website && (
                                <Link to={item.website}>
                                    링크: {item.website}
                                </Link>
                            )}
                        </div>
                    </article>
                    <section className="detail-map">
                        <KakaoMap location={item.location} />
                    </section>
                </section>
            </main>
        )
    );
}

import KakaoMap from '../components/Map';
import { Link, useParams } from 'react-router-dom';
import { useRestaurantItemQuery } from '../hooks/useRestaurantQuery';

export default function DetailPage() {
    const { id } = useParams();
    const { restaurantItem, isLoading } = useRestaurantItemQuery(id);

    return (
        <main className="main">
            {isLoading && <div>Loading...</div>}
            {restaurantItem && !isLoading && (
                <section className="detail">
                    <article className="detail-content">
                        <img
                            src={
                                restaurantItem.thumbnail
                                    ? restaurantItem.thumbnail
                                    : 'image/img-notFound.webp'
                            }
                            alt={`${restaurantItem.name}의 이미지`}
                            className="detail-image"
                        />
                        <div className="detail-info">
                            <h2 className="detail-name">
                                {restaurantItem.name}
                            </h2>
                            <p className="detail-address">
                                도로명 주소:{' '}
                                {restaurantItem.location.roadAddress}
                            </p>
                            <p className="detail-address">
                                지번 주소:{' '}
                                {restaurantItem.location.parcelAddress}
                            </p>
                            <p>영업시간: {restaurantItem.openingHours}</p>
                            <p>{restaurantItem.category}</p>
                            <p>전화번호: {restaurantItem.contact}</p>
                            {restaurantItem.website && (
                                <Link to={restaurantItem.website}>
                                    링크: {restaurantItem.website}
                                </Link>
                            )}
                        </div>
                    </article>
                    <section className="detail-map">
                        <KakaoMap location={restaurantItem.location} />
                    </section>
                </section>
            )}
        </main>
    );
}

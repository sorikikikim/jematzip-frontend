import { useEffect, useRef } from 'react';

export default function KakaoMap({ location }) {
    const mapContainer = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
        script.async = true;

        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(() => {
                const position = new window.kakao.maps.LatLng(
                    location.lat,
                    location.lng
                );
                const options = {
                    center: position,
                    level: 3,
                };

                const marker = new window.kakao.maps.Marker({
                    position,
                });

                const map = new window.kakao.maps.Map(
                    mapContainer.current,
                    options
                );
                marker.setMap(map);
            });
        };
    }, []);

    return (
        <div
            className="map"
            ref={mapContainer}
            style={{ width: '100%', height: '400px' }}
        ></div>
    );
}

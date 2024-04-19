import { useEffect, useRef } from 'react';

const { kakao } = window;

export default function Map(location) {
    const mapContainer = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
        script.async = true;

        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(() => {
                const position = new kakao.maps.LatLng(
                    location.latitude,
                    location.longitude
                );
                const options = {
                    center: position,
                    level: 3,
                };

                const marker = new kakao.maps.Marker({
                    position,
                });

                const map = new kakao.maps.Map(mapContainer.current, options);
                marker.setMap(map);
            });
        };
    }, [location.latitude, location.longitude]);
    return <div id="map" className="w-full h-screen" ref={mapContainer}></div>;
}

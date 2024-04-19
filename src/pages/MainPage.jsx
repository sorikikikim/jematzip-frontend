import Map from '../components/Map';

export default function MainPage() {
    const location = { latitude: 37.1281986, longitude: 128.213175 };
    return (
        <div className="text-lg text-red-800">
            <Map location={location} />
        </div>
    );
}

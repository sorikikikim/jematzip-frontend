import { Link } from 'react-router-dom';

export default function Card({ el }) {
    return (
        <article className="card">
            <img src={el.thumbnail} alt={`${el.name}의 이미지`} />
            <div className="card-detail">
                <div className="card-description">
                    <div className="rounded-[10px] bg-red-300 text-white py-1 px-2 mb-3 w-fit">
                        {el.category}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{el.name}</h2>
                    <p className="text-gray-700">{el.location.roadAddress}</p>
                    <p className="text-gray-400">{el.location.parcelAddress}</p>
                </div>
            </div>
            <div className="card-buttons">
                <Link
                    className="text-blue-500 hover:text-blue-700"
                    to={`/restaurant/${el._id}`}
                    key={el._id}
                >
                    상세보기
                </Link>
                <button>좋아요</button>
            </div>
        </article>
    );
}

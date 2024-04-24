import { Link } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useState } from 'react';

export default function Card({ el }) {
    const [isLike, setIsLike] = useState(false);

    const handleLikeClick = () => {
        setIsLike(!isLike);
    };

    return (
        <article className="card">
            {el.thumbnail ? (
                <img
                    src={el.thumbnail}
                    alt={`${el.name}의 이미지`}
                    className="card-image"
                />
            ) : (
                <img
                    src="image/img-notFound.webp"
                    alt={`${el.name}의 이미지`}
                    className="card-image"
                />
            )}
            <div className="card-detail">
                <div className="rounded-[10px] bg-red-300 text-white py-1 px-2 mb-3 w-fit">
                    {el.category}
                </div>
                <h2 className="text-xl font-semibold mb-2">{el.name}</h2>
                <p className="text-gray-700">{el.location.roadAddress}</p>
                <p className="text-gray-400">{el.location.parcelAddress}</p>
            </div>
            <div className="card-buttons">
                <Link
                    to={`/restaurant/${el._id}`}
                    key={el._id}
                    className="flex items-center bg-white py-2 px-3 rounded-[30px] border-2 border-blue-400 bg-blue-200 ml-8"
                >
                    <span className="text-blue-500 font-semibold">
                        상세보기
                    </span>
                </Link>

                <button
                    className="flex items-center gap-1 bg-white py-2 px-3 rounded-[30px] border-2 border-rose-200 mr-8"
                    onClick={handleLikeClick}
                >
                    {isLike ? <FcLike /> : <FcLikePlaceholder />}
                    <span className="font-semibold">제맛이지</span>
                </button>
            </div>
        </article>
    );
}

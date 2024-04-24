import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    JematZIP.
                </Link>
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <Link to="/restaurant" className="navbar-list-item">
                            맛집 목록
                        </Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="/register" className="navbar-list-item">
                            맛집 등록
                        </Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="/" className="navbar-list-item">
                            찜한 가게
                        </Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="/mypage" className="navbar-list-item">
                            로그인
                        </Link>
                    </li>
                </ul>
                {/* mobile-button */}
                <button
                    className="navbar-button"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </nav>
            {isOpen && (
                <nav className="navbar--mobile">
                    <ul className="navbar-list--mobile">
                        <li className="navbar-list-item--mobile">
                            <Link
                                to="/restaurant"
                                className="navbar-list-item--mobile"
                            >
                                맛집 목록
                            </Link>
                        </li>
                        <li className="navbar-list-item--mobile">
                            <Link
                                to="/register"
                                className="navbar-list-item--mobile"
                            >
                                맛집 등록
                            </Link>
                        </li>
                        <li className="navbar-list-item--mobile">
                            <Link to="/" className="navbar-list-item--mobile">
                                찜한 가게
                            </Link>
                        </li>
                        <li className="navbar-list-item--mobile">
                            <Link
                                to="/mypage"
                                className="navbar-list-item--mobile"
                            >
                                로그인
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

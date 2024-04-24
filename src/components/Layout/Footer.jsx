import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 bottom-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">JematZIP</h2>
                    <p>주소: 충청북도 제천시 장락동</p>
                    <p>전화번호: 010-9221-1927</p>
                    <p>이메일: sorikim980@gmail.com</p>
                </div>
                <nav className="flex flex-wrap justify-center md:justify-end">
                    <ul className="mr-10">
                        <li>
                            <Link to="#" className="hover:text-gray-300">
                                홈
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-300">
                                서비스
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-300">
                                Github
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="#" className="hover:text-gray-300">
                                이용 약관
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-300">
                                개인정보 처리방침
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2024 All Rights Reserved</p>
                <p>Created by Sori Kim</p>
            </div>
        </footer>
    );
}

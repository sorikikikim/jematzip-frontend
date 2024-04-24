import './styles/global.css';
import './styles/tailwind.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import ListPage from './pages/ListPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/restaurant" element={<ListPage />} />
                    <Route path="/restaurant/:id" element={<DetailPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

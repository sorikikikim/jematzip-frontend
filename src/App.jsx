import './styles/global.css';
import './styles/tailwind.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import ListPage from './pages/ListPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/restaurant" element={<ListPage />} />
                        <Route
                            path="/restaurant/:id"
                            element={<DetailPage />}
                        />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;

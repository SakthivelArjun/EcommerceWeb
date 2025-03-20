import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Products from '../pages/Products';



const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="product" element={<Products />} />
            </Route>
        </Routes >
    );
};
export default RoutesApp;

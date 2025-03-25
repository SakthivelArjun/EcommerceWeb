import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import DayDeals from '../pages/dayDeals';
import NewArrivals from '../pages/newArrivals';
import Cart from '../pages/cart';



const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="dayDeals" element={<DayDeals />} />
                <Route path="newArrivals" element={<NewArrivals />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes >
    );
};
export default RoutesApp;

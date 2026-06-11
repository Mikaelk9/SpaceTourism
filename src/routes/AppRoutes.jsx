import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from '../pages/Home/Home'
import Crew from '../pages/Crew/Crew'
import Destination from '../pages/Destination/Destination'
import Technology from '../pages/Technology/Technology'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="crew" element={< Crew/>} />
                <Route path="destination" element={< Destination/>} />
                <Route path="technology" element={< Technology/>} />
            </Route>
        </Routes>
    );
}
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Body } from "../components/body/Body";

export const RoutesComponents: React.FC = () => {
    return (
        <Routes>
            <Route path='/*' element={<Navigate to='/home/today' />} />
            <Route path='/home/:pathId' element={<Body />} />
        </Routes>
    );
};
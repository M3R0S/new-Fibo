import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const TestPage = lazy(() => import("./test"));

export const Routing = () => (
    <Routes>
        <Route path="/" element={<TestPage />} />
    </Routes>
);

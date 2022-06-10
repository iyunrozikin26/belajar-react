import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";
import MovieList from "./pages/MovieList";
import MoviesOrder from "./pages/MoviesOrder";

import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { TopUp } from "./pages/TopUp";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<MovieList />} />
                    <Route path="/movies" element={<MovieList />} />
                    <Route path="/movies/:movieId/details" element={<DetailsPage />} />
                    <Route path="/transaction/movies" element={<MoviesOrder />} />
                    <Route path="/user/topUpMoney" element={<TopUp />} />
                    {/* <Route path="/transaction/movies/:movieId/details" element={<DetailsPage />} /> */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;

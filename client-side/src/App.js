import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";
import MovieList from "./pages/MovieList";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<MovieList />} />
                    <Route path="/movies" element={<MovieList />} />
                    <Route path="/movies/:movieId/details" element={<DetailsPage />} />
                </Route>
            </Routes>
        </>
    );
};
export default App;

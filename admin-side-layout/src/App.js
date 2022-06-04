import React from "react";
import "./style/layout.css";

import { Routes, Route } from "react-router-dom";
// VALIDASI login register
// PAGES
import HomePage from "./pages/HomePage";
import MovieList from "./pages/MovieList";
import CreateMovie from "./pages/CreateForm";
import UpdateMovie from "./pages/UpdateForm";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<MovieList />} />
                    <Route index path="movies" element={<MovieList />} />
                    <Route path="movies/create" element={<CreateMovie />} />
                    <Route path="movies/:movieId/edit" element={<UpdateMovie />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

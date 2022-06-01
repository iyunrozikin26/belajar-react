import React from "react";
import { Routes, Route } from "react-router-dom";
import CardMovies from "./components/CardMovies";
import NavigationBar from "./components/Navbar";
import AddMovies from "./pages/AddMovies";

// pages
import DetailsMovie from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import UpdateMovies from "./pages/UpdateMovie";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<CardMovies />}>
                    <Route path="/movies" element={<CardMovies />} />
                    <Route path="/movies/:movieId" element={<CardMovies />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="details/:movieId" element={<DetailsMovie />} />
                <Route path="addMovies" element={<AddMovies />} />
                <Route path="editMovies/:movieId" element={<UpdateMovies />} />
            </Routes>
        </>
    );
}

export default App;

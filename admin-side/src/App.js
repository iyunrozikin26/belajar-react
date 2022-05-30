import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardMovies from "./components/CardMovies";
import NavigationBar from "./components/Navbar";
import useFetch from "./hooks/useFetch";
import AddMovies from "./pages/AddMovies";

// pages
import DetailsMovie from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import UpdateMovies from "./pages/UpdateMovie";

function App() {
    const [moviesData, loading, error] = useFetch("http://localhost:3000/movies"); // import data yang sudah di Fetching
    const [movies, setMovies] = useState([]); // movies digunakan di props
    // const { movieId } = useParams();
    // console.log(movieId);

    useEffect(() => {
        getAllMovies();
    }, []);

    const getAllMovies = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/movies",
        })
            .then(({ data }) => {
                setMovies(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<CardMovies movies={moviesData} />}>
                    <Route path="/movies" element={<CardMovies movies={moviesData} />} />
                    = <Route path="/movies/:movieId" element={<CardMovies movies={moviesData} />} />
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

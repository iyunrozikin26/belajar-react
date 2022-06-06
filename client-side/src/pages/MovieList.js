import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMovies from "../components/CardMovies";
import { fetchMovies } from "../stores/creators/movieCreator";

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, error, loading } = useSelector((state) => state.movieReducer);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <>
            {loading && <span className="text-4xl text-red-600 bg-white flex items-center justify-center">LOADING...</span>}
            {loading && !error && <span className="text-red-600 bg-white">{error}</span>}
            {!loading && !error && <CardMovies prop1={movies} />}
        </>
    );
};
export default MovieList;

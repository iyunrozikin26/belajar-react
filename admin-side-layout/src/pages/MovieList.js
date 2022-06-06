import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../stores/actionCreators/movieCreator";
import "../style/layout.css";
import TableMovies from "../components/TableMovies";

const MovieList = () => {
    const { movies, moviesError, moviesLoading, search } = useSelector((state) => state.movieReducer);
    // console.log(search, "====== ini dari movieList");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <>
            <center>
                {moviesLoading && <span className="text-3xl text-fuchsia-500">Loading...</span>}
                {!moviesLoading && moviesError && <h3>{moviesError}</h3>}
            </center>
            <div className="tableMovies relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                {!moviesLoading && !moviesError && (
                    <>
                        <span className="w-full mt-7 h-auto text-3xl text-left text-gray-900 dark:text-gray-400">LIST MOVIES</span>
                        <table className="w-full mt-7 h-auto text-sm text-left text-gray-900 dark:text-gray-400">
                            <thead className="text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Synopsis
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <TableMovies props1={movies} props2={search}  />
                        </table>
                    </>
                )}
            </div>
        </>
    );
};

export default MovieList;

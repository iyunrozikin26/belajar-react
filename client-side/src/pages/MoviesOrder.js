import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../stores/creators/movieCreator";
import CardMovies from "../components/CardMovies";

export default function MoviesOrder() {
    const dispatch = useDispatch();
    const userId = localStorage.userId;
    // const { orderMovies } = useSelector((state) => state.movieReduser);
    const { orderMovies } = useSelector((state) => state.movieReducer);

    useEffect(() => {
        dispatch(getAllOrders(userId));
    }, [dispatch]);

    console.log(userId);
    console.log(orderMovies);

    return (
        <>
            {/* <a href="#" className="logo font-bold text-center text-red-400">
                MoviesOrder
            </a> */}
            {/* <span className="font-bold text-center text-red-400">{JSON.stringify(orderMovies)}</span> */}
            <CardMovies prop1={orderMovies.map(movies => movies.Movie)} />
        </>
    );
}

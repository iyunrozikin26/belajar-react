import axios from "axios";
import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE } from "../types/movieType";

const moviesUrl = "http://localhost:3001/movies";

export const setMovies = (payload) => {
    return { type: SET_MOVIES, payload };
};
export const setMoviesLoading = (payload) => {
    return { type: SET_MOVIES_LOADING, payload };
};
export const setMoviesError = (payload) => {
    return { type: SET_MOVIES_ERROR, payload };
};
export const setSingleMovie = (payload) => {
    return { type: GET_SINGLE_MOVIE, payload };
};

export const fetchMovies = () => {
    return (dispatch, getState) => {
        dispatch(setMoviesLoading(true));
        dispatch(setMoviesError(null));
        fetch(moviesUrl)
            .then((response) => {
                if (!response.ok) throw new Error("cannot to fetch data");
                return response.json();
            })
            .then((data) => {
                console.log(data);
                dispatch(setMovies(data));
            })
            .catch((error) => dispatch(setMoviesError(error.message)))
            .finally(() => dispatch(setMoviesLoading(false)));
    };
};

export const getSingleMovie = (id) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: `${moviesUrl}/${id}`,
        })
            .then(({ data }) => {
                dispatch(setSingleMovie(data));
            })
            .catch((error) => console.log(error));
    };
};

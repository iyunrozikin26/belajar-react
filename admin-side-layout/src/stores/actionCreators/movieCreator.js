import axios from "axios";
import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE, SET_SEARCH } from "../actionTypes/movieType";

const moviesUrl = "http://localhost:3001/movies";

const setMovies = (payload) => {
    return { type: SET_MOVIES, payload };
};
const setMoviesLoading = (payload) => {
    return { type: SET_MOVIES_LOADING, payload };
};
const setMoviesError = (payload) => {
    return { type: SET_MOVIES_ERROR, payload };
};
export const setSingleMovie = (payload) => {
    return { type: GET_SINGLE_MOVIE, payload };
};

export const setSearch = (payload) => {
    return { type: SET_SEARCH, payload };
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

export const addNewMovie = (newMovie) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: moviesUrl,
            data: newMovie,
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(fetchMovies());
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getSingleMovie = (movieId) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: `${moviesUrl}/${movieId}`,
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(setSingleMovie(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const updatedMovie = (movieId, updateMovie) => {
    return (dispatch) => {
        axios({
            method: "put",
            url: moviesUrl + "/" + movieId,
            data: updateMovie,
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(fetchMovies());
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const deleteMovie = (movieId) => {
    return (dispatch) => {
        axios({
            method: "delete",
            url: moviesUrl + "/" + movieId,
        })
            .then(({ data }) => {
                // console.log(data);
                dispatch(fetchMovies());
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

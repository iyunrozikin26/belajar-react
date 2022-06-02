import axios from "axios";
import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, ADD_MOVIES, DETAILS_MOVIE, GET_SINGLE_MOVIE, UPDATED_MOVIE } from "../actionTypes/type";

export const setMovies = (payload) => {
    return { type: SET_MOVIES, payload };
};
export const setMoviesLoading = (payload) => {
    return { type: SET_MOVIES_LOADING, payload };
};
export const setMoviesError = (payload) => {
    return { type: SET_MOVIES_ERROR, payload };
};

export const setNewMovie = (payload) => {
    return { type: ADD_MOVIES, payload };
};

export const setMovie = (payload) => {
    return { type: DETAILS_MOVIE, payload };
};
export const setSingleMovie = (payload) => {
    return { type: GET_SINGLE_MOVIE, payload };
};
export const setUpdatedMovie = (payload) => {
    return { type: UPDATED_MOVIE, payload };
};

export const fetchMovies = () => {
    return (dispatch, getState) => {
        dispatch(setMoviesLoading(true));
        dispatch(setMoviesError(null));
        fetch("http://localhost:3000/movies")
            .then((response) => {
                if (!response.ok) throw new Error("cannot fetch");
                return response.json();
            })
            .then((data) => {
                dispatch(setMovies(data));
            })
            .catch((error) => {
                dispatch(setMoviesError(error.message));
            })
            .finally(() => {
                dispatch(setMoviesLoading(false));
            });
    };
};

export const addMovies = (user) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: "http://localhost:3000/movies",
            data: user,
        })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const details = (movieId) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: "http://localhost:3000/movies/" + movieId,
        })
            .then(({ data }) => {
                // console.log(data);
                dispatch(setMovie(data));
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
            url: "http://localhost:3000/movies/" + movieId,
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

export const updatedMovie = (movieId, newMovie) => {
    return (dispatch) => {
        axios({
            method: "put",
            url: "http://localhost:3000/movies/" + movieId,
            data: newMovie,
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(setUpdatedMovie(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

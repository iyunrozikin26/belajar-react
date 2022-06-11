import axios from "axios";
import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE, GET_ORDER_MOVIES, SET_SEARCH, SET_SEARCH_BY_NAME } from "../types/movieType";

// const moviesUrl = "http://localhost3001/movies";
// const orderUrl = "http://localhost3001/transaction";
const moviesUrl = "https://movie-deploy-server.herokuapp.com/movies";
const orderUrl = "https://movie-deploy-server.herokuapp.com/transaction";
const access_token = localStorage.access_token;

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
export const setOrderMovies = (payload) => {
    return { type: GET_ORDER_MOVIES, payload };
};
export const setSearch = (payload) => {
    return { type: SET_SEARCH, payload };
};
export const setSearchByName = (payload) => {
    return { type: SET_SEARCH_BY_NAME, payload };
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
                dispatch(setMovies(data.rows));
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

export const moviesOrders = (movieId, userId) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: orderUrl + "/" + movieId + "/movies",
                headers: { access_token, userId },
            })
                .then(({ data }) => resolve(data))
                .catch((error) => reject(error));
        });
    };
};

export const getAllOrders = (userId) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: orderUrl + "/movies",
            headers: { access_token, userId },
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(setOrderMovies(data));
            })
            .catch((error) => console.log(error));
    };
};

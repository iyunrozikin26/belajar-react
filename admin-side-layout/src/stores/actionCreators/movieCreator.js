import axios from "axios";
import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE, SET_SEARCH, GET_ALL_GENRE } from "../actionTypes/movieType";

const moviesUrl = "https://movie-deploy-server.herokuapp.com/movies";
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

export const setSearch = (payload) => {
    return { type: SET_SEARCH, payload };
};
export const setAllGenre = (payload) => {
    return { type: GET_ALL_GENRE, payload };
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

export const addNewMovie = (newMovie) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: moviesUrl,
                data: newMovie,
                headers: { access_token },
            })
                .then(({ data }) => {
                    console.log(access_token);
                    resolve(data);
                    // dispatch(fetchMovies());
                })
                .catch((err) => reject(err));
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
        return new Promise((resolve, reject) => {
            axios({
                method: "patch",
                url: moviesUrl + "/" + movieId + "/edit",
                data: updateMovie,
                headers: { access_token },
            })
                .then(({ data }) => {
                    resolve(data);
                    // dispatch(fetchMovies());
                })
                .catch((err) => reject(err));
        });
    };
};

export const deleteMovie = (movieId) => {
    return (dispatch, getState) => {
        axios({
            method: "delete",
            url: moviesUrl + "/" + movieId + "/delete",
            headers: { access_token },
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(fetchMovies());
            })
            .catch((err) => console.log(err));
    };
};

export const getAllGenre = () => {
    return (dispatch) => {
        axios({
            method: "get",
            url: moviesUrl + "/genre",
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(setAllGenre(data));
            })
            .catch((err) => console.log(err));
    };
};

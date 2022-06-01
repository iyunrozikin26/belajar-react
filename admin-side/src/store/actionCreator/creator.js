import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING } from "../actionTypes/type";

export const setMovies = (payload) => {
    return { type: SET_MOVIES, payload };
};
export const setMoviesLoading = (payload) => {
    return { type: SET_MOVIES_LOADING, payload };
};
export const setMoviesError = (payload) => {
    return { type: SET_MOVIES_ERROR, payload };
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

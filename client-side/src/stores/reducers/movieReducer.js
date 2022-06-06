import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE } from "../types/movieType";
const initialState = {
    movies: [],
    error: null,
    loading: false,
    movie: {},
};

const movieReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_MOVIES:
            return { ...state, movies: payload };
        case SET_MOVIES_ERROR:
            return { ...state, error: payload };
        case SET_MOVIES_LOADING:
            return { ...state, loading: payload };
        case GET_SINGLE_MOVIE:
            return { ...state, movie: payload };
        default:
            return state;
    }
};
export default movieReducer;

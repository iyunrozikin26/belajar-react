import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, ADD_MOVIES, DETAILS_MOVIE, GET_SINGLE_MOVIE } from "../actionTypes/type";

const initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: null,
    movie: {},
};

function moviesReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_MOVIES:
            return { ...state, movies: payload };
        case SET_MOVIES_LOADING:
            return { ...state, moviesLoading: payload };
        case SET_MOVIES_ERROR:
            return { ...state, moviesError: payload };
        case ADD_MOVIES:
            return { ...state, movies: payload };
        case DETAILS_MOVIE:
            return { ...state, movie: payload };
        case GET_SINGLE_MOVIE:
            return { ...state, movie: payload };
        case GET_SINGLE_MOVIE:
            return { ...state, movie: payload };
        default:
            return state;
    }
}
export default moviesReducer;

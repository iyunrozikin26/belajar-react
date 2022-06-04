import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE } from "../actionTypes/movieType";

const initialState = {
    movies: [],
    moviesError: null,
    moviesLoading: false,
    movie: {},
};

function movieReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_MOVIES:
            return { ...state, movies: payload };
        case SET_MOVIES_ERROR:
            return { ...state, moviesError: payload };
        case SET_MOVIES_LOADING:
            return { ...state, moviesLoading: payload };
        case GET_SINGLE_MOVIE:
            return { ...state, movie: payload };
        default:
            return state;
    }
}
export default movieReducer;

import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING } from "../actionTypes/type";

const initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: null,
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
        default:
            return state;
    }
}
export default moviesReducer;

import { SET_USER_REGISTER } from "../actionTypes/userType";

const initialState = {
    user: {},
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_REGISTER:
            return { ...state, user: payload };
        default:
            return state;
    }
}

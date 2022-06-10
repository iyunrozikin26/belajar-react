// import { SET_USER_LOGIN } from "../types/userType";
import { SET_USER_LOGIN } from '../types/userType'

const initialState = {
    user: {},
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_LOGIN:
            return { ...state, user: payload };
        default:
            return state;
    }
}

export default userReducer;

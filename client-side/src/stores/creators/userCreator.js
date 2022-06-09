import axios from "axios";

const usersUrl = "http://localhost:3001/users";

// export const setUserLogin = (payload) => {
//     return { type: SET_USER_LOGIN, payload };
// };

export const userRegister = (newUser) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: usersUrl + "/register-cust",
            data: newUser,
        })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    };
};

export const userLogin = (user) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: usersUrl + "/login",
                data: user,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        });
    };
};

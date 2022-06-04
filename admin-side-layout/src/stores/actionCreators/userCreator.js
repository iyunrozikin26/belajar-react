import axios from "axios";

const usersUrl = "http://localhost:3001/users";

export const userRegister = (newUser) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: usersUrl,
            data: newUser,
        })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    };
};

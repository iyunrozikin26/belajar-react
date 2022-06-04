import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../stores/actionCreators/userCreator";

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleNewUser = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
        console.log(newUser);
    };

    const submitNewUser = (e) => {
        e.preventDefault();
        dispatch(userRegister(newUser));
        navigate("/login");
    };

    return (
        <>
            <div className="formLogin">
                <div className="back relative p-4 w-full justify-center h-full md:h-auto">
                    <div className="layoutlogin relative  shadow dark:bg-gray-700">
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-3xl font-medium text-white dark:text-white">SignUp to our platform</h3>
                            <form className="space-y-6" onSubmit={submitNewUser}>
                                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                    <div>
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-gray-300">First name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={newUser.firstName}
                                            onChange={handleNewUser}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Deni"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-gray-300">Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={newUser.lastName}
                                            onChange={handleNewUser}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Rahmana"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-bold text-white dark:text-gray-300">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={newUser.email}
                                        onChange={handleNewUser}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={newUser.password}
                                        onChange={handleNewUser}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required=""
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Create account
                                </button>
                                <div className="text-sm font-medium text-white dark:text-gray-300">
                                    Back to{" "}
                                    <Link to="/login" className="text-blue-400 font-bold hover:underline dark:text-blue-500">
                                        Sign In
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="image">
                        <img className="w-96 h-full" src="https://www.pixelstalk.net/wp-content/uploads/images6/Cool-Marvel-Wallpaper-Free-Download.jpg" />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default RegisterPage;

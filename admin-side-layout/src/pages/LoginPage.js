import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const submitLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("access_token", "ini_rahasia_ilahi");
        navigate('/movies')
        // console.log("LOGIN BUTTON");
    };
    return (
        <>
            <div className="formLogin">
                <div className="back relative p-4 w-full justify-center h-full md:h-auto">
                    <div className="layoutlogin relative  shadow dark:bg-gray-700">
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-3xl font-medium text-white dark:text-white">Sign in to our platform</h3>
                            <form className="space-y-6" onSubmit={submitLogin}>
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-white dark:text-gray-300">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
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
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required=""
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <label className="ml-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login to your account
                                </button>
                                <div className="text-sm font-medium text-white dark:text-gray-300">
                                    Not registered?{" "}
                                    <Link to="/register" className="text-blue-400 font-bold hover:underline dark:text-blue-500">
                                        Sign Up
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

export default LoginPage;

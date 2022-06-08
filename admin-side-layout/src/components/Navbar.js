import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import SearchMovies from "./SearchMovie";

const NavigationBar = () => {
    const access_token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        if (localStorage) {
            localStorage.clear();
            navigate("/login");
        }
    };
    return (
        <>
            <nav className="navigationBar bg-dark-400 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="container overflow-x-hidden flex flex-wrap justify-between items-center mx-auto">
                    <Link className="flex items-center" to="/movies">
                        <img src="https://coursereport-production.imgix.net/uploads/school/logo/322/original/Logo_Hacktiv8.jpg?w=200&h=200" className="mt-1 mr-2 h-6 sm:h-9 rounded-xl" alt="Hactiv8 Logo" />
                        <span className="text-white self-center text-xl font-bold whitespace-nowrap dark:text-white">HackMovies</span>
                    </Link>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                        <ul className="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {access_token && (
                                <>
                                    <li>
                                        <SearchMovies />
                                    </li>
                                    <li>
                                        <Link
                                            to="movies/create"
                                            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Add Movie
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                            {!access_token && (
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    {/* <Profile /> */}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default NavigationBar;

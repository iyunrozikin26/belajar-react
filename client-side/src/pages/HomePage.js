import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../stores/creators/userCreator";
import { fetchMovies, setSearch, setSearchByName } from "../stores/creators/movieCreator";
import SearchMovies from "../components/SearchMovie";

export const HomePage = () => {
    const access_token = localStorage.access_token;
    const userId = localStorage.userId;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUser(userId));
    }, [userId]);

    const { user } = useSelector((state) => state.userReducer);

    const filterChange = (e) => {
        e.preventDefault();
        dispatch(setSearch(e.target.value));
        dispatch(setSearchByName(e.target.value));
    };

    const getAllRepeat = (e) => {
        dispatch(fetchMovies());
        e.target.value = "";
    };
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <>
            <div>
                <header className="header">
                    <Link to="/movies">
                        <a href="#" className="logo font-bold text-red-400" onClick={filterChange} value="">
                            HackMovies
                        </a>
                    </Link>
                    <input className="side-menu" type="checkbox" id="side-menu" />
                    <label className="hamb" for="side-menu">
                        <span className="hamb-line"></span>
                    </label>
                    <nav className="nav">
                        <ul className="menu font-mono font-bold">
                            {/* <li>
                                <Link to="movies/trending">Trending</Link>
                            </li>
                            <li>
                                <Link to="movies/new">New Release</Link>
                            </li> */}
                            <li>
                                <Link to="/" onClick={getAllRepeat}>
                                    Home
                                </Link>
                            </li>
                            {access_token && (
                                <>
                                    <li>
                                        <Link to="/transaction/movies">My movie</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/topUpMoney">
                                            <span className="text-blue-400">
                                                Hi. {user.firstName + " " + user.lastName} | IDR. {user.money}
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                            {!access_token && (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <main className="filter w-full text-center flex flex-row justify-center items-center bg-emerald-300 mb-3">
                        <ul className="filter w-full text-sm flex  pl-8 justify-between ">
                            <li>
                                <button name="filter" onClick={filterChange} value="1">
                                    ACTION
                                </button>
                            </li>
                            <li>
                                <button name="filter" onClick={filterChange} value="2">
                                    SCI-FI
                                </button>
                            </li>
                            <li>
                                <button name="filter" onClick={filterChange} value="5">
                                    ADVENTURE
                                </button>
                            </li>
                            <li>
                                <button name="filter" onClick={filterChange} value="3">
                                    THRILLER
                                </button>
                            </li>
                            <li>
                                <button name="filter" onClick={filterChange} value="4">
                                    HORROR
                                </button>
                            </li>
                            <li>
                                <button name="filter" onClick={filterChange} value="6">
                                    COMEDY
                                </button>
                            </li>
                        </ul>
                        <SearchMovies />
                        {/* <h1 className="filter w-full text-center flex flex-row justify-center bg-red-500">INI SEARCH NAVIGATION BY TITLE</h1> */}
                    </main>
                    <Outlet />
                </header>
            </div>
            <div>
                <footer>
                    <p> &copy; 2022 nasrunrozikin26@gmail.com</p>
                </footer>
            </div>
        </>
    );
};

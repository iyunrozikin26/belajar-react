import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const HomePage = () => {
    const access_token = localStorage.access_token;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <>
            <div>
                <header className="header">
                    <Link to="/">
                        <a href="#" className="logo font-bold text-red-400">
                            HackMovies
                        </a>
                    </Link>
                    <input className="side-menu" type="checkbox" id="side-menu" />
                    <label className="hamb" for="side-menu">
                        <span className="hamb-line"></span>
                    </label>
                    <nav className="nav">
                        <ul className="menu font-mono font-bold">
                            <li>
                                <Link to="movies/trending">Trending</Link>
                            </li>
                            <li>
                                <Link to="movies/new">New Release</Link>
                            </li>
                            {access_token && (
                                <>
                                    <li>
                                        <Link to="/transaction/movies">My movie</Link>
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
                    <main className="filter w-full text-center flex flex-row justify-center bg-emerald-300 mb-3">
                        <ul className="filter w-full text-sm flex  pl-8 justify-between bg-rose-300">
                            <li>
                                <Link to="movies/action">ACTION</Link>
                            </li>
                            <li>
                                <Link to="movies/horror">HORROR</Link>
                            </li>
                            <li>
                                <Link to="movies/sci-fi">SCI-FI</Link>
                            </li>
                            <li>
                                <Link to="movies/thriller">THRILLER</Link>
                            </li>
                            <li>
                                <Link to="movies/adventure">ADVENTURE</Link>
                            </li>
                            <li>
                                <Link to="movies/romance">ROMANCE</Link>
                            </li>
                            <li>
                                <Link to="movies/crime">CRIME</Link>
                            </li>
                            <li>
                                <Link to="movies/comedy">COMEDY</Link>
                            </li>
                        </ul>
                        <h1 className="filter w-full text-center flex flex-row justify-center bg-red-500">INI SEARCH NAVIGATION BY TITLE</h1>
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

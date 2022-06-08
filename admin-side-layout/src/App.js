import React from "react";
import "./style/layout.css";

import { Routes, Route, Outlet } from "react-router-dom";
// VALIDASI login register
import IsLogin from "./guard/IsLogin";
// PAGES
import HomePage from "./pages/HomePage";
import MovieList from "./pages/MovieList";
import CreateMovie from "./pages/CreateForm";
import UpdateMovie from "./pages/UpdateForm";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route
                        index
                        element={
                            <IsLogin>
                                <MovieList />
                            </IsLogin>
                        }
                    />
                    <Route
                        path="movies"
                        element={
                            <IsLogin>
                                <MovieList />
                            </IsLogin>
                        }
                    />
                    <Route
                        path="movies/create"
                        element={
                            <IsLogin>
                                <CreateMovie />
                            </IsLogin>
                        }
                    />
                    <Route
                        path="movies/:movieId/edit"
                        element={
                            <IsLogin>
                                <UpdateMovie />
                            </IsLogin>
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <IsLogin>
                                <LoginPage />
                            </IsLogin>
                        }
                    />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

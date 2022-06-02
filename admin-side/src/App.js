import React from "react";
import { Routes, Route } from "react-router-dom";
import CardMovies from "./components/CardMovies";
import NavigationBar from "./components/Navbar";
import IsLogin from "./guard/isLogin";
import AddMovies from "./pages/AddMovies";

// pages
import DetailsMovie from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import UpdateMovies from "./pages/UpdateMovie";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="login" element={<LoginPage />} />

                <Route
                    path="/"
                    element={
                        <IsLogin>
                            <CardMovies />
                        </IsLogin>
                    }
                >
                    <Route
                        path="/movies"
                        element={
                            <IsLogin>
                                <CardMovies />
                            </IsLogin>
                        }
                    />
                    <Route
                        path="/movies/:movieId"
                        element={
                            <IsLogin>
                                <CardMovies />
                            </IsLogin>
                        }
                    />
                </Route>
                <Route
                    path="details/:movieId"
                    element={
                        <IsLogin>
                            <DetailsMovie />
                        </IsLogin>
                    }
                />
                <Route
                    path="addMovies"
                    element={
                        <IsLogin>
                            <AddMovies />
                        </IsLogin>
                    }
                />
                <Route
                    path="editMovies/:movieId"
                    element={
                        <IsLogin>
                            <UpdateMovies />
                        </IsLogin>
                    }
                />
            </Routes>
        </>
    );
}

export default App;

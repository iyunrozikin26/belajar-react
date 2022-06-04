import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNewMovie } from "../stores/actionCreators/movieCreator";

const CreateMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newMovie, setNewMovie] = useState({
        title: "",
        synopsis: "",
        imgUrl: "",
        rating: "",
        GenreId: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };
    // console.log(newMovie);
    const submitNewMovie = (e) => {
        e.preventDefault();
        dispatch(addNewMovie(newMovie));
        navigate("/movies");
        setNewMovie({
            title: "",
            synopsis: "",
            imgUrl: "",
            rating: "",
            GenreId: "",
        });
    };

    return (
        <>
            <div className="formMovies bg-blend-darken mt-9">
                <span className="text-center text-4xl mb-9">Add New Movie</span>
                <form onSubmit={submitNewMovie}>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="title"
                            value={newMovie.title}
                            onChange={handleOnChange}
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="title"
                            class="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            title of Movie
                        </label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="GenreId"
                                value={newMovie.GenreId}
                                onChange={handleOnChange}
                                id="GenreId"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                for="GenreId"
                                className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                genre
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="rating"
                                value={newMovie.rating}
                                onChange={handleOnChange}
                                id="rating"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                for="rating"
                                className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                rate of Movie
                            </label>
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="imgUrl"
                            value={newMovie.imgUrl}
                            onChange={handleOnChange}
                            id="imgUrl"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            for="imgUrl"
                            className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Image
                        </label>
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Synopsis
                        </label>
                        <textarea
                            id="message"
                            name="synopsis"
                            value={newMovie.synopsis}
                            onChange={handleOnChange}
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="synopsis text..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        SAVE
                    </button>
                    <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        <Link to="/movies">BACK</Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateMovie;

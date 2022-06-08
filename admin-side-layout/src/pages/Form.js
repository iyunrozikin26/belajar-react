import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addNewMovie, getAllGenre, getSingleMovie, setSingleMovie } from "../stores/actionCreators/movieCreator";

const FormPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieId } = useParams();

    // const [newMovie, setNewMovie] = useState({
    //     title: "",
    //     slug: "ini slug",
    //     synopsis: "",
    //     trailerUrl: "",
    //     imgUrl: "",
    //     rating: "",
    //     price: "",
    //     GenreId: "",
    // });
    
    useEffect(() => {
        dispatch(getSingleMovie(movieId));
    }, [movieId]);

    const { movie, allGenre } = useSelector((state) => state.movieReducer);

    useEffect(() => {
        dispatch(getAllGenre());
    }, [dispatch]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        dispatch(
            setSingleMovie({
                ...movie,
                [name]: value,
                slug: "ini-slug",
            })
        );
    };
    // console.log(movie);
    console.log(movieId);

    const submitNewMovie = (e) => {
        e.preventDefault();
        dispatch(addNewMovie(movie));
        navigate(`/movies`);
    };

    return (
        <>
            <div className="formMovies bg-blend-darken mt-9">
                {movieId && <span className="text-center text-4xl mb-9">Edit Movie</span>}
                {!movieId && <span className="text-center text-4xl mb-9">Add New Movie</span>}
                <form onSubmit={submitNewMovie}>
                    <div className="relative z-0 w-full mb-4 group">
                        <input
                            type="text"
                            name="title"
                            value={movie.title}
                            onChange={handleOnChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="title"
                            className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            title of Movie
                        </label>
                    </div>
                    <div className="grid xl:grid-cols-2 mb-4 xl:gap-6">
                        <div className="relative z-0 w-full mt-2 group">
                            <input
                                type="text"
                                name="price"
                                value={movie.price}
                                onChange={handleOnChange}
                                id="price"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="price"
                                className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                price
                            </label>
                        </div>
                        <div className="relative flex justify-around pr-2 mt-2 text-left z-0 w-full group">
                            <div className="relative flex justify-around text-left z-0 w-full group">
                                <input
                                    type="text"
                                    name="GenreId"
                                    value={movie.GenreId}
                                    onChange={handleOnChange}
                                    id="GenreId"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required=""
                                />
                                <label
                                    htmlFor="GenreId"
                                    className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    genre
                                </label>
                            </div>
                            <div className="relative flex justify-around z-0 w-20  group">
                                <input
                                    type="text"
                                    name="rating"
                                    value={movie.rating}
                                    onChange={handleOnChange}
                                    id="rating"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required=""
                                />
                                <label
                                    htmlFor="rating"
                                    className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    rating
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-4 group">
                        <input
                            type="text"
                            name="imgUrl"
                            value={movie.imgUrl}
                            onChange={handleOnChange}
                            id="imgUrl"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="imgUrl"
                            className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Image
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-4 group">
                        <input
                            type="text"
                            name="trailerUrl"
                            value={movie.trailerUrl}
                            onChange={handleOnChange}
                            id="trailerUrl"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="trailerUrl"
                            className="peer-focus:font-medium absolute text-l text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Trailer
                        </label>
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Synopsis
                        </label>
                        <textarea
                            id="message"
                            name="synopsis"
                            value={movie.synopsis}
                            onChange={handleOnChange}
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

export default FormPage;

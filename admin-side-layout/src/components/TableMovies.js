import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { deleteMovie } from "../stores/actionCreators/movieCreator";

const TableMovies = (props) => {
    let { props1, props2 } = props;
    props2 = props2.toLowerCase();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (movieId) => {
        dispatch(deleteMovie(movieId));
    };
    return (
        <>
            <tbody className="tableBody">
                {props1
                    .filter((movie) => {
                        if (props2) return movie.title.toLowerCase().includes(props2);
                        return movie;
                        // return movie.title.toLowerCase().includes(props2);
                    })
                    .map((movie, i) => {
                        return (
                            <tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700" key={i}>
                                <td className="px-6 py-4">{i + 1}</td>
                                <td className="px-6 py-4">
                                    <img src={movie.imgUrl} alt={movie.title} />
                                </td>

                                <td className="px-6 py-4">{movie.title}</td>
                                <td className="px-6 py-4">
                                    <p>{movie.synopsis}</p>
                                </td>
                                <td className="px-6 py-4">{movie.rating}</td>
                                <td className="px-6 py-4 text-center justify-between mt-10 flex flex-col">
                                    <button className="text-white mb-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <Link to={`/movies/${movie.id}/edit`}>EDIT</Link>
                                    </button>
                                    <button
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                        onClick={() => {
                                            handleDelete(movie.id);
                                        }}
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
            <Outlet />
        </>
    );
};
export default TableMovies;

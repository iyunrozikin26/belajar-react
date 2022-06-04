import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { deleteMovie } from "../stores/actionCreators/movieCreator";

const TableMovies = (props) => {
    const { send } = props;
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (movieId) => {
        dispatch(deleteMovie(movieId));
    };
    return (
        <>
            <tbody className="tableBody">
                {send.map((movie, i) => {
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
                            <td className="px-6 py-4 text-right">
                                <button>
                                    <Link to={`/movies/${movie.id}/edit`}>EDIT</Link>
                                </button>
                                <button
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

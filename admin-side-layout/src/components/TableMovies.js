import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { deleteMovie } from "../stores/actionCreators/movieCreator";

const TableMovies = (props) => {
    let { props1, props2 } = props;
    props2 = props2.toLowerCase();
    const dispatch = useDispatch();

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

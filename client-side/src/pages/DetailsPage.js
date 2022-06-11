import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMovie, moviesOrders } from "../stores/creators/movieCreator";

export const DetailsPage = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const userId = localStorage.userId;
    const { movie } = useSelector((state) => state.movieReducer);

    useEffect(() => {
        dispatch(getSingleMovie(movieId));
    }, [movieId]);

    const handleOrder = (movieId) => {
        // console.log("button BUY", movieId);
        dispatch(moviesOrders(movieId, userId))
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="layout-details flex">
                <div className="card-details flex-col w-6/12  justify-center rounded">
                    <div className="details-i rounded overflow-hidden shadow-lg">
                        <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                        <div className="details-ii px-6 py-4">
                            <div className="font-bold text-xl mb-2">{movie.title}</div>
                            {/* <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p> */}
                        </div>
                    </div>
                    <div className="details-i bg-white flex flex-col rounded overflow-hidden shadow-lg">
                        <div className="details-ii px-6 py-4">
                            <div className="font-bold text-xl mb-2">synopsis</div>
                            <p className="text-gray-700 text-xs">{movie.synopsis}</p>
                            <div className="details-ii w-full px-6 py-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                                {movie.price > 0 && (
                                    <div className="inline-block bg-red-400 w-full rounded-full px-3 mt-1 py-1 text-sm text-center font-semibold text-gray-700 mr-2">
                                        <button
                                            onClick={() => {
                                                handleOrder(movie.id);
                                            }}
                                            className="inline-block bg-red-400 w-full rounded-full px-3 py-1 text-sm text-center font-semibold text-gray-700 mr-2"
                                        >
                                            <span>BUY</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-page w-full">
                    <div className="card-container">
                        <div>
                            <h1 className="text-white">in the same genre</h1>
                        </div>
                        <div className="flex">
                            <div>
                                <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                                <h1 className=" bg-green-400 flex items-center justify-center ml-2.5 mr-2 h-8 text-blue-900 transform -translate-y-10 text-sm font-bold text-center">{movie.title}</h1>
                            </div>
                            <div>
                                <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                                <h1 className=" bg-green-400 flex items-center justify-center ml-2.5 mr-2 h-8 text-blue-900 transform -translate-y-10 text-sm font-bold text-center">{movie.title}</h1>
                            </div>
                            <div>
                                <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                                <h1 className=" bg-green-400 flex items-center justify-center ml-2.5 mr-2 h-8 text-blue-900 transform -translate-y-10 text-sm font-bold text-center">{movie.title}</h1>
                            </div>
                            <div>
                                <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                                <h1 className=" bg-green-400 flex items-center justify-center ml-2.5 mr-2 h-8 text-blue-900 transform -translate-y-10 text-sm font-bold text-center">{movie.title}</h1>
                            </div>
                            <div>
                                <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                                <h1 className=" bg-green-400 flex items-center justify-center ml-2.5 mr-2 h-8 text-blue-900 transform -translate-y-10 text-sm font-bold text-center">{movie.title}</h1>
                            </div>

                            {/* <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                            <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                            <img className="image-details" src={movie.imgUrl} alt={movie.title} />
                            <img className="image-details" src={movie.imgUrl} alt={movie.title} /> */}
                        </div>
                        <div className="playList-movie">
                            <h1 className="text-white text-2xl font-serif font-bold text-center">CLICK PLAY TO WATCH MOVIE : {movie.title}</h1>
                            <img className="image" src={movie.imgUrl} alt={movie.title} />
                            <h1 className="text-white text-2xl font-serif font-bold text-center mt-2 mb-2 ">DOWNLOAD : {movie.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovie } from "../stores/creators/movieCreator";

export const DetailsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieId } = useParams();

    const { movie } = useSelector((state) => state.movieReducer);

    useEffect(() => {
        dispatch(getSingleMovie(movieId));
    }, [movieId]);

    return (
        <>
            <div className="layout-details flex">
                <div class="card-details flex-col w-8/12  justify-center rounded">
                    <div class="details-i rounded overflow-hidden shadow-lg">
                        <img class="image-details" src={movie.imgUrl} alt={movie.title} />
                        <div class="details-ii px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                    </div>
                    <div class="details-i bg-white flex flex-col rounded overflow-hidden shadow-lg">
                        <div class="details-ii px-6 py-4">
                            <div class="font-bold text-xl mb-2">{movie.title}</div>
                            <p class="text-gray-700 text-base">{movie.synopsis}</p>
                        </div>
                        <div class="details-ii px-6 py-4">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                </div>
                <div class="card-movies-genre flex w-4/12  justify-center rounded">
                    <div class="w-9/12 flex flex-col rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

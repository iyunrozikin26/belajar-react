import { Link, useNavigate } from "react-router-dom";

const CardMovies = (props) => {
    let { prop1 } = props;

    return (
        <div className="card-page">
            <div class="card-container">
                {prop1.map((movie, i) => {
                    return (
                        <div className="flex flex-col justify-center items-center text-whi">
                            <div class="card" key={movie.id}>
                                <div class="box">
                                    <div class="content flex flex-col">
                                        <img src={movie.imgUrl} />
                                        <div className="flex justify-between mt-1">
                                            <p className="rating text-yellow-300 text-left font-bold text-sm pl-3 pt-1 bg-zinc-700 rounded w-11">{movie.rating}</p>
                                            <Link to={`movies/${movie.id}/details`} className="watch text-white bg-red-500 w-24 h-7 rounded items-center flex text-center justify-center">
                                                <button>Watch</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>{movie.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default CardMovies;

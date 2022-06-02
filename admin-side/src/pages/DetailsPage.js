import React, { useEffect } from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../store/actionCreator/creator";

function DetailsMovie() {
    const { movieId } = useParams();
    // const [movie, setMovie] = useState({});
    //  didMount jika diberikan [] kosong pada parameer ke-2
    //  didMount, didUpdated, didUnMount dijalankan ketika parameter kedua kosong atau tidak diberikan
    const dispatch = useDispatch();
    const { movie } = useSelector((state) => state.moviesReducer);
    useEffect(() => {
        dispatch(details(movieId));
    }, [movieId]);

    return (
        <>
            <h2 className="m-3 text-dark">Details of Movie </h2>
            <CardGroup className="cardDetails p-1 m-3 bg-dark">
                <Card>
                    <Card.Img className="m-1 p-1" variant="top" src={movie.imgUrl} />
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Title> Rating: {movie.rating}</Card.Title>
                        <Card.Title>Synopsis</Card.Title>
                        <Card.Text>{movie.synopsis}</Card.Text>
                        <Link to={`/editMovies/${movie.id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    );
}
export default DetailsMovie;

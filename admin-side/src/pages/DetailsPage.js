import React, { useEffect, useState } from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function DetailsMovie() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    //  didMount jika diberikan [] kosong pada parameer ke-2
    //  didMount, didUpdated, didUnMount dijalankan ketika parameter kedua kosong atau tidak diberikan
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/movies/" + movieId,
        })
            .then(({ data }) => {
                // console.log(data);
                setMovie(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [movieId]);
   //  console.log(movie);
   

    return (
        <>
            <h2 className="m-3 text-dark">Details of Movie </h2>
            <CardGroup className="p-1 m-3 bg-dark">
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

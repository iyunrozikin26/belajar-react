import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actionCreator/creator";
import { Card, Col, Row, Container, Image, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CardMovies() {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios({
            method: "delete",
            url: "http://localhost:3000/movies/" + id,
        })
            .then(({ data }) => {
                console.log(data);
                navigate("/movies");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const { movies, moviesLoading, moviesError } = useSelector((state) => state.moviesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <>
            <Container>
                <br />
                <h1 className="title text-dark">List Movies</h1>
                {moviesLoading && <h3>Loading...</h3>}
                {!moviesLoading && moviesError && <h3>{moviesError}</h3>}
                {!moviesLoading && !moviesError && (
                    <Row>
                        {movies.map((movie, i) => {
                            return (
                                <Col md={3} className="movieWrapper" key={i}>
                                    <Card className="text-white movieImage border">
                                        <Image src={movie.imgUrl} alt={movie.title} className="images" />
                                        <div className="bg-dark">
                                            <div className="p-2 text-white">
                                                <Card.Title className="h6 text-center">{movie.title}</Card.Title>
                                                <Card.Text>
                                                    <Nav.Link className="d-flex justify-content-around">
                                                        <Link className="text-white" to={`/details/${movie.id}`}>
                                                            Details
                                                        </Link>
                                                        <Link
                                                            className="text-white"
                                                            onClick={() => {
                                                                handleDelete(movie.id);
                                                            }}
                                                            to={`/movies/${movie.id}`}
                                                        >
                                                            Delete
                                                        </Link>
                                                    </Nav.Link>
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Container>
        </>
    );
}

export default CardMovies;

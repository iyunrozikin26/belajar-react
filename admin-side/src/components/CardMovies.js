import axios from "axios";
import React from "react";
import { Card, Col, Row, Container, Image, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CardMovies({ movies }) {
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

    return (
        <>
            <Container>
                <h1 className="title text-dark">LIST MOVIES</h1>
                <Row>
                    {movies.map((movie, i) => {
                        return (
                            <Col md={3} className="movieWrapper" key={i}>
                                <Card className="text-white movieImage border">
                                    <Image src={movie.imgUrl} alt={movie.title} className="images" />
                                    <div className="bg-dark">
                                        <div className="p-2 text-white">
                                            <Card.Title className="text-center">{movie.title}</Card.Title>
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
            </Container>
        </>
    );
}

export default CardMovies;

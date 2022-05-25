import React from "react";
import { Card, Col, Row, Container, Image } from "react-bootstrap";

function CardMovies({ movies }) {
    return (
        <div>
            <Container>
                <br />
                <h1 id="trending" className="text-white">
                    TRENDING MOVIES
                </h1>
                <Row>
                    {movies.map((movie, i) => {
                        return (
                            <Col md={3} className="movieWrapper">
                                <Card className="bg-dark text-white movieImage border border-3">
                                    <Image src={movie.imgUrl} alt={movie.title} className="images" />
                                    <div className="bg-dark">
                                        <div className="p-2 text-white">
                                            <Card.Title className="text-center">{movie.title}</Card.Title>
                                            <Card.Text className="text-left">{movie.synopsis}</Card.Text>
                                            <Card.Text className="text-left">Rating : {movie.rating}</Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default CardMovies;

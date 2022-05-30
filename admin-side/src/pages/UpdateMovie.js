import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function UpdateMovies() {
    const [newMovie, setNewMovie] = useState({
        title: "",
        synopsis: "",
        imgUrl: "",
        rating: "",
        GenreId: "",
    });
    const handleUpdate = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();

    const { movieId } = useParams();

    const getMovie = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/movies/" + movieId,
        })
            .then(({ data }) => {
                console.log(data);
                setNewMovie(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(newMovie, "ini baru");

    useEffect(() => {
        getMovie();
    }, [movieId]);

    const submitUpdateMovie = (e) => {
        e.preventDefault();
        axios({
            method: "put",
            url: "http://localhost:3000/movies/" + movieId,
            data: newMovie,
        })
            .then(({ data }) => {
                console.log(data);
                navigate(`/details/${movieId}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Form onSubmit={submitUpdateMovie} className="formAdd">
                <h1>Movies Form</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={newMovie.title} onChange={handleUpdate} placeholder="Title" />
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="GenreId" value={newMovie.GenreId} onChange={handleUpdate} placeholder="Genre" />
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" name="rating" value={newMovie.rating} onChange={handleUpdate} placeholder="Rating" />
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" name="imgUrl" value={newMovie.imgUrl} onChange={handleUpdate} placeholder="Image Url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Synopsis</Form.Label>
                    <Form.Control name="synopsis" value={newMovie.synopsis} onChange={handleUpdate} as="textarea" rows={4} />
                </Form.Group>
                <Button type="submit">submit</Button>
            </Form>
        </>
    );
}

export default UpdateMovies;

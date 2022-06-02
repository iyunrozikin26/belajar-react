import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie, updatedMovie } from "../store/actionCreator/creator";

function UpdateMovies() {
    const { movie } = useSelector((state) => state.moviesReducer);

    const [newMovie, setNewMovie] = useState(movie);

    const handleUpdate = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();

    const { movieId } = useParams();
    const dispatch = useDispatch();

    const getMovie = () => {
        dispatch(getSingleMovie(movieId));
    };
    // console.log(newMovie, "ini baru");

    useEffect(() => {
        getMovie();
    }, [movieId]);

    const submitUpdateMovie = (e) => {
        e.preventDefault();
        dispatch(updatedMovie(movieId, newMovie));
        navigate(`/details/${movieId}`);
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

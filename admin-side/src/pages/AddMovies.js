import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovies } from "../store/actionCreator/creator";

function AddMovies() {
    const [newMovie, setNewMovie] = useState({
        title: "",
        synopsis: "",
        imgUrl: "",
        rating: "",
        GenreId: "",
    });
    const handleAdd = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
        console.log(newMovie);
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitAddMovie = (e) => {
        e.preventDefault();
        dispatch(addMovies(newMovie));
    };
    return (
        <>
            <Form onSubmit={submitAddMovie} className="formAdd">
                <h1>Form Add</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={newMovie.title} onChange={handleAdd} placeholder="Title" />
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="GenreId" value={newMovie.GenreId} onChange={handleAdd} placeholder="Genre" />
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" name="rating" value={newMovie.rating} onChange={handleAdd} placeholder="Rating" />
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" name="imgUrl" value={newMovie.imgUrl} onChange={handleAdd} placeholder="Image Url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Synopsis</Form.Label>
                    <Form.Control name="synopsis" value={newMovie.synopsis} onChange={handleAdd} as="textarea" rows={4} />
                </Form.Group>
                <Button type="submit">submit</Button>
            </Form>
        </>
    );
}
export default AddMovies;

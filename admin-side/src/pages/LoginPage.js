import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function Loginpage() {
    const [User, setUser] = useState({
        email: "",
        password: "",
    });
    const handleLogin = (e) => {
        setUser({
            ...User,
            [e.target.name]: e.target.value,
        });
        console.log(User);
    };
    const navigate = useNavigate();
    const submitLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("access_token", "rahasiailahi");
        navigate("/movies");
    };
    return (
        <>
            <Form onSubmit={submitLogin} className="formAdd">
                <h1>Login Form</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={User.email} onChange={handleLogin} placeholder="email" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" name="password" value={User.password} onChange={handleLogin} placeholder="password" />
                </Form.Group>
                <Button type="submit">submit</Button>
            </Form>
        </>
    );
}
export default Loginpage;

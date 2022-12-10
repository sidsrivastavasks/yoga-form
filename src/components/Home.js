import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const navigateTo = useNavigate();

    const handleUserDetails = (e) => {
        e.preventDefault();
        navigateTo(`/book-slot`);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        navigateTo(`/update-slot`);
    };

    return (
        <div className="home">
            <button onClick={handleUserDetails}>Book A Slot</button>
            <button onClick={handleUpdate}>Update Slot</button>
        </div>
    );
};

export default Home;

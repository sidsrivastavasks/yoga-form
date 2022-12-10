import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UserForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        timeSlot: "",
    });

    const handleNameInput = (e) => {
        setUser({ ...user, name: e.target.value });
    };

    const handleEmailInput = (e) => {
        setUser({ ...user, email: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submitted");
    };

    return (
        <div class="form-container">
            <form class="register-form">
                <div class="success-message">
                    Success! Thank you for registering
                </div>
                <input
                    id="first-name"
                    class="form-field"
                    type="text"
                    onChange={handleNameInput}
                    placeholder="Name"
                    name="name"
                />
                <span id="last-name-error">Please enter a last name</span>
                <input
                    id="email"
                    class="form-field"
                    type="email"
                    onChange={handleEmailInput}
                    placeholder="Email"
                    name="email"
                />
                <span id="email-error">Please enter an email address</span>
                <button onClick={handleSubmit} class="form-field" type="submit">
                    Proceed To Pay
                </button>
            </form>
        </div>
    );
};

export default UserForm;

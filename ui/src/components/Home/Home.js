import { useState } from "react";

const Home = () => {
    const data = {userName: "Devansh", qualification: "graduate", city: "varanasi", phoneNumber: "83202384092"}

    return (
        <div className="login-form">
            <h1>Home</h1>
            <div className="content">
                <div className="input-field">
                    <label>Username: </label>
                    <input value={data.userName} readOnly />
                </div>
                <div className="input-field">
                    <label>Qualification: </label>
                    <input value={data.qualification} readOnly />
                </div>
                <div className="input-field">
                    <label>City: </label>
                    <input value={data.city} readOnly />
                </div>
                <div className="input-field">
                    <label>Phone number: </label>
                    <input value={data.phoneNumber} readOnly />
                </div>
            </div>
        </div>
    )
}

export default Home;
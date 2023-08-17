import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState({
        userName: "",
        qualification: "",
        city: "",
        phoneNumber: ""
    });
    const navigate = useNavigate();

    const handleCompleteAdd = (data) => {
        if (data.status) {
            setUser(data.data)
        }
        else {
            alert("something went wrong");
        }
    }

    const handleLogout = (data) => {
        if (data.status) {
            navigate("/")
            localStorage.clear();
            alert(data.data.message)
        }
        else {
            alert("something went wrong");
        }
    }

    const logout = async() => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/logout", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
            })
            const responseData = await response.json();
            handleLogout(responseData)
        } catch (error) {
            console.log(error);
            alert(error);
        }

    }

    const getUserDetails = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/homepage", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
            });
            const responseData = await response.json();
            handleCompleteAdd(responseData)
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <div className="login-form">
                <h1>Home</h1>
                <div className="content">
                    <div className="input-field">
                        <label>Username: </label>
                        <input value={user.userName} readOnly />
                    </div>
                    <div className="input-field">
                        <label>Qualification: </label>
                        <input value={user.qualification} readOnly />
                    </div>
                    <div className="input-field">
                        <label>City: </label>
                        <input value={user.city} readOnly />
                    </div>
                    <div className="input-field">
                        <label>Phone number: </label>
                        <input value={user.phoneNumber} readOnly />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home;
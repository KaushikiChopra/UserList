import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [qualification, setQualification] = useState("");
    const [city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const onUserNameChange = (event) => {
        setUserName(event.target.value)
    }
    const onQualificationChange = (event) => {
        setQualification(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const onRoleChange = (event) => {
        setRole(event.target.value)
    }
    const onCityChange = (event) => {
        setCity(event.target.value)
    }
    const onPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }
    const handleCompleteAdd = (e) => {
        if (e.ok) {
            alert("user added successfully");
            navigate("/")
        }
        else {
            alert("something went wrong");
          
        }
      }

    const onSubmit = async() => {
        const data = {
            userName:userName,
            password:password,
            role: role,
            qualification:qualification,
            city:city,  
            phoneNumber:phoneNumber
        }
        await fetch("http://localhost:3000/api/v1/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        }).then((response) => { handleCompleteAdd(response) })
    }
    return (
        <div className="login-form">
            <h1>Register</h1>
            <div className="content">
                <div className="input-field">
                    <input type="userName" placeholder="UserName" onChange={onUserNameChange} />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Password" onChange={onPasswordChange} />
                </div>
                <div className="input-field">
                    <input type="role" placeholder="Role" onChange={onRoleChange} />
                </div>
                <div className="input-field">
                    <input type="qualification" placeholder="Qualification" onChange={onQualificationChange} />
                </div>
                <div className="input-field">
                    <input type="city" placeholder="City" onChange={onCityChange} />
                </div>
                <div className="input-field">
                    <input type="phoneNumber" placeholder="Phone Number" onChange={onPhoneNumberChange} />
                </div>
            </div>
            <div className="action">
                <button><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> Sign In </Link></button>
                <button onClick={onSubmit}>Register</button>
            </div>
        </div>
    )
}

export default Register;